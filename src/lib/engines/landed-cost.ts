/**
 * Core Landed Cost Calculation Engine
 * 
 * Accurately allocates all import overhead costs (freight, duties, C&F, transport, insurance)
 * across import items to compute the true unit Landed Cost in BDT,
 * while strictly preserving the original foreign supplier purchase price and FX rate.
 */

export type AllocationMethod =
  | 'BY_QUANTITY'
  | 'BY_VALUE'
  | 'BY_WEIGHT'
  | 'BY_VOLUME'
  | 'MANUAL';

export interface RawImportItem {
  id: string;
  productId: string;
  productName?: string;
  orderedQty: number;
  unitPurchasePriceOriginal: number; // in Foreign Currency (e.g. CNY 500)
  currency: string;                  // e.g. "CNY"
  exchangeRate: number;              // e.g. 16.0 BDT / CNY
  weightKg?: number;
  volumeCbm?: number;
  manualAllocationBDT?: number;
}

export interface RawCostItem {
  id: string;
  costType: string;
  name: string;
  amountBDT: number;
}

export interface CalculatedLandedCostResult {
  totalPurchaseCostBDT: number;
  totalAdditionalCostsBDT: number;
  totalLandedCostBDT: number;
  allocationMethod: AllocationMethod;
  allocatedItems: {
    id: string;
    productId: string;
    productName?: string;
    orderedQty: number;
    unitPurchasePriceOriginal: number;
    purchaseCurrency: string;
    exchangeRate: number;
    unitPurchasePriceBDT: number;
    allocatedTotalImportCostBDT: number;
    allocatedUnitImportCostBDT: number;
    finalUnitLandedCostBDT: number;
    totalLandedCostBDT: number;
  }[];
}

export class LandedCostEngine {
  /**
   * Calculates landed cost per item based on selected allocation method
   */
  static calculate(
    items: RawImportItem[],
    costItems: RawCostItem[],
    method: AllocationMethod = 'BY_QUANTITY'
  ): CalculatedLandedCostResult {
    // 1. Calculate total additional import costs in BDT
    const totalAdditionalCostsBDT = costItems.reduce(
      (sum, cost) => sum + (Number(cost.amountBDT) || 0),
      0
    );

    // 2. Calculate baseline purchase costs in BDT
    let totalPurchaseCostBDT = 0;
    let totalQuantity = 0;
    let totalWeight = 0;
    let totalVolume = 0;

    const baseItems = items.map((item) => {
      const qty = Number(item.orderedQty) || 0;
      const rate = Number(item.exchangeRate) || 1.0;
      const unitOrig = Number(item.unitPurchasePriceOriginal) || 0;
      const unitBDT = unitOrig * rate;
      const totalItemPurchaseBDT = unitBDT * qty;

      totalPurchaseCostBDT += totalItemPurchaseBDT;
      totalQuantity += qty;
      totalWeight += (Number(item.weightKg) || 0) * qty;
      totalVolume += (Number(item.volumeCbm) || 0) * qty;

      return {
        ...item,
        qty,
        rate,
        unitOrig,
        unitBDT,
        totalItemPurchaseBDT
      };
    });

    // 3. Allocate additional costs across items
    const allocatedItems = baseItems.map((item) => {
      let allocatedTotalImportCostBDT = 0;

      if (totalAdditionalCostsBDT > 0) {
        switch (method) {
          case 'BY_QUANTITY': {
            const ratio = totalQuantity > 0 ? item.qty / totalQuantity : 0;
            allocatedTotalImportCostBDT = totalAdditionalCostsBDT * ratio;
            break;
          }
          case 'BY_VALUE': {
            const ratio = totalPurchaseCostBDT > 0 ? item.totalItemPurchaseBDT / totalPurchaseCostBDT : 0;
            allocatedTotalImportCostBDT = totalAdditionalCostsBDT * ratio;
            break;
          }
          case 'BY_WEIGHT': {
            const itemWeight = (Number(item.weightKg) || 0) * item.qty;
            const ratio = totalWeight > 0 ? itemWeight / totalWeight : 0;
            allocatedTotalImportCostBDT = totalAdditionalCostsBDT * ratio;
            break;
          }
          case 'BY_VOLUME': {
            const itemVol = (Number(item.volumeCbm) || 0) * item.qty;
            const ratio = totalVolume > 0 ? itemVol / totalVolume : 0;
            allocatedTotalImportCostBDT = totalAdditionalCostsBDT * ratio;
            break;
          }
          case 'MANUAL': {
            allocatedTotalImportCostBDT = Number(item.manualAllocationBDT) || 0;
            break;
          }
          default: {
            const ratio = totalQuantity > 0 ? item.qty / totalQuantity : 0;
            allocatedTotalImportCostBDT = totalAdditionalCostsBDT * ratio;
          }
        }
      }

      const allocatedUnitImportCostBDT = item.qty > 0 ? allocatedTotalImportCostBDT / item.qty : 0;
      const finalUnitLandedCostBDT = item.unitBDT + allocatedUnitImportCostBDT;
      const totalItemLandedCostBDT = finalUnitLandedCostBDT * item.qty;

      return {
        id: item.id,
        productId: item.productId,
        productName: item.productName,
        orderedQty: item.qty,
        unitPurchasePriceOriginal: item.unitOrig,
        purchaseCurrency: item.currency,
        exchangeRate: item.rate,
        unitPurchasePriceBDT: Math.round(item.unitBDT * 100) / 100,
        allocatedTotalImportCostBDT: Math.round(allocatedTotalImportCostBDT * 100) / 100,
        allocatedUnitImportCostBDT: Math.round(allocatedUnitImportCostBDT * 100) / 100,
        finalUnitLandedCostBDT: Math.round(finalUnitLandedCostBDT * 100) / 100,
        totalLandedCostBDT: Math.round(totalItemLandedCostBDT * 100) / 100
      };
    });

    const totalLandedCostBDT = totalPurchaseCostBDT + totalAdditionalCostsBDT;

    return {
      totalPurchaseCostBDT: Math.round(totalPurchaseCostBDT * 100) / 100,
      totalAdditionalCostsBDT: Math.round(totalAdditionalCostsBDT * 100) / 100,
      totalLandedCostBDT: Math.round(totalLandedCostBDT * 100) / 100,
      allocationMethod: method,
      allocatedItems
    };
  }
}
