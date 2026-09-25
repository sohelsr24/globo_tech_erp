/**
 * Immutable Stock Movement Ledger Engine
 * 
 * Enforces strict transaction-safe stock updates:
 * - Every stock modification creates an immutable StockMovementLedger entry.
 * - Enforces the Non-Negative Stock rule (unless explicitly permitted by Admin settings).
 * - Tracks historical unit landed cost to guarantee accurate inventory valuation and COGS.
 */

import { prisma } from '../prisma';

export type MovementType =
  | 'PURCHASE_GRN'
  | 'SALE_INVOICE'
  | 'SALES_RETURN'
  | 'PURCHASE_RETURN'
  | 'TRANSFER_IN'
  | 'TRANSFER_OUT'
  | 'PROJECT_ISSUE'
  | 'PROJECT_RETURN'
  | 'DAMAGE_WRITEOFF'
  | 'ADJUSTMENT'
  | 'OPENING_STOCK';

export interface RecordMovementParams {
  productId: string;
  warehouseId: string;
  movementType: MovementType;
  quantityDelta: number; // positive (adds to stock) or negative (reduces stock)
  unitLandedCost: number;
  referenceType: string;  // e.g. "GRN", "INVOICE", "PROJECT", "TRANSFER"
  referenceId: string;    // e.g. "GRN-2026-001", "INV-2026-9001"
  serialNumbers?: string[];
  userId?: string;
  reasonNotes?: string;
  allowNegativeOverride?: boolean;
}

export class StockLedgerEngine {
  /**
   * Executes a stock movement transaction atomically with ledger audit trail
   */
  static async recordMovement(params: RecordMovementParams) {
    const {
      productId,
      warehouseId,
      movementType,
      quantityDelta,
      unitLandedCost,
      referenceType,
      referenceId,
      serialNumbers = [],
      userId,
      reasonNotes,
      allowNegativeOverride = false
    } = params;

    // Check system settings for negative stock policy
    const setting = await prisma.setting.findFirst({
      where: { id: 'SYSTEM_CONFIG' }
    });
    const blockNegative = setting?.blockNegativeStock ?? true;

    // Find or initialize warehouse stock record
    const existingStock = await prisma.stock.findUnique({
      where: {
        warehouseId_productId: {
          warehouseId,
          productId
        }
      }
    });

    const currentQty = existingStock?.quantityAvailable ?? 0;
    const newQty = currentQty + quantityDelta;

    // RULE 8: Block negative stock
    if (newQty < 0 && blockNegative && !allowNegativeOverride) {
      throw new Error(
        `Negative stock blocked: Product ${productId} only has ${currentQty} units available in warehouse ${warehouseId}. Cannot deduct ${Math.abs(quantityDelta)} units.`
      );
    }

    // Atomic update & ledger creation
    return await prisma.$transaction(async (tx) => {
      // 1. Update or create stock record
      const stock = await tx.stock.upsert({
        where: {
          warehouseId_productId: {
            warehouseId,
            productId
          }
        },
        create: {
          warehouseId,
          productId,
          quantityAvailable: newQty,
          quantityReserved: 0,
          quantityDamaged: 0,
          quantityInTransit: 0
        },
        update: {
          quantityAvailable: newQty
        }
      });

      // 2. Create immutable stock movement record
      const ledgerEntry = await tx.stockMovementLedger.create({
        data: {
          productId,
          warehouseId,
          movementType,
          quantityDelta,
          balanceAfter: newQty,
          unitLandedCost,
          totalCostValue: quantityDelta * unitLandedCost,
          referenceType,
          referenceId,
          serialNumbers: serialNumbers.length > 0 ? JSON.stringify(serialNumbers) : null,
          createdById: userId,
          reasonNotes
        }
      });

      return {
        stock,
        ledgerEntry
      };
    });
  }

  /**
   * Retrieves complete audit history of stock movements for any product
   */
  static async getProductMovementHistory(productId: string) {
    return await prisma.stockMovementLedger.findMany({
      where: { productId },
      include: {
        warehouse: true,
        createdBy: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { timestamp: 'desc' }
    });
  }
}
