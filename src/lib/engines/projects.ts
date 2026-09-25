/**
 * Installation & Project Management Engine
 * 
 * Handles material issue from warehouse with automatic landed-cost charge,
 * technician labor and daily allowance tracking, and real-time project profitability.
 */

import { prisma } from '../prisma';
import { StockLedgerEngine } from './stock-ledger';

export class ProjectEngine {
  /**
   * Issue materials from warehouse for a project
   * Automatically decreases warehouse stock via StockLedgerEngine and increases project material cost
   */
  static async issueMaterial(params: {
    projectId: string;
    warehouseId: string;
    productId: string;
    quantity: number;
    serialNumbers?: string[];
    userId?: string;
  }) {
    const { projectId, warehouseId, productId, quantity, serialNumbers = [], userId } = params;

    const product = await prisma.product.findUnique({
      where: { id: productId }
    });
    if (!product) throw new Error('Product not found');

    const project = await prisma.project.findUnique({
      where: { id: projectId }
    });
    if (!project) throw new Error('Project not found');

    const unitLandedCost = product.currentLandedCost || product.purchasePrice || 0;
    const totalMaterialCost = quantity * unitLandedCost;

    return await prisma.$transaction(async (tx) => {
      // 1. Create project material issue record
      const issueRecord = await tx.projectMaterialIssue.create({
        data: {
          projectId,
          warehouseId,
          productId,
          quantityIssued: quantity,
          unitLandedCost,
          totalCost: totalMaterialCost,
          serialNumbers: serialNumbers.length ? JSON.stringify(serialNumbers) : null
        }
      });

      // 2. Reduce warehouse stock via Immutable Stock Ledger
      await StockLedgerEngine.recordMovement({
        productId,
        warehouseId,
        movementType: 'PROJECT_ISSUE',
        quantityDelta: -quantity,
        unitLandedCost,
        referenceType: 'PROJECT',
        referenceId: project.projectCode,
        serialNumbers,
        userId,
        reasonNotes: `Issued for Project: ${project.projectName}`
      });

      // 3. Update serial numbers status to INSTALLED
      if (serialNumbers.length) {
        await tx.serialNumber.updateMany({
          where: { serialNumber: { in: serialNumbers } },
          data: {
            currentStatus: 'INSTALLED',
            projectId
          }
        });
      }

      // 4. Recalculate project totals
      const newMaterialCost = (project.materialLandedCost || 0) + totalMaterialCost;
      const newTotalCost =
        newMaterialCost +
        (project.laborCost || 0) +
        (project.transportCost || 0) +
        (project.otherCost || 0);
      const newGrossProfit = (project.contractValue || 0) - newTotalCost;

      await tx.project.update({
        where: { id: projectId },
        data: {
          materialLandedCost: newMaterialCost,
          totalProjectCost: newTotalCost,
          projectGrossProfit: newGrossProfit
        }
      });

      return issueRecord;
    });
  }

  /**
   * Log technician labor for a project
   */
  static async logLabor(params: {
    projectId: string;
    technicianId?: string;
    technicianName: string;
    regularDays: number;
    dailyRate: number;
    overtimeHours?: number;
    overtimeRate?: number;
    notes?: string;
  }) {
    const {
      projectId,
      technicianId,
      technicianName,
      regularDays,
      dailyRate,
      overtimeHours = 0,
      overtimeRate = 200,
      notes
    } = params;

    const laborCost = regularDays * dailyRate;
    const overtimeCost = overtimeHours * overtimeRate;
    const totalLaborCost = laborCost + overtimeCost;

    const project = await prisma.project.findUnique({
      where: { id: projectId }
    });
    if (!project) throw new Error('Project not found');

    return await prisma.$transaction(async (tx) => {
      const laborRecord = await tx.projectLaborCost.create({
        data: {
          projectId,
          technicianId,
          technicianName,
          regularDays,
          dailyRate,
          overtimeHours,
          overtimeRate,
          totalLaborCost,
          notes
        }
      });

      const newLaborCost = (project.laborCost || 0) + totalLaborCost;
      const newTotalCost =
        (project.materialLandedCost || 0) +
        newLaborCost +
        (project.transportCost || 0) +
        (project.otherCost || 0);
      const newGrossProfit = (project.contractValue || 0) - newTotalCost;

      await tx.project.update({
        where: { id: projectId },
        data: {
          laborCost: newLaborCost,
          totalProjectCost: newTotalCost,
          projectGrossProfit: newGrossProfit
        }
      });

      return laborRecord;
    });
  }
}
