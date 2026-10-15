// Persistent Storage Engine for Products, Warehouse Stock, and Stock Ledger

export interface ProductItem {
  id: string;
  sku: string;
  barcode: string;
  name: string;
  category: string;
  brand: string;
  unit: string;
  stock: number;
  minStock: number;
  purchasePriceCNY: number;
  currentLandedCost: number;
  retailPrice: number;
  wholesalePrice: number;
  projectPrice: number;
  dealerPrice: number;
  isSerialTracked: boolean;
}

export interface WarehouseStockItem {
  id: string;
  warehouseName: string;
  productName: string;
  sku: string;
  available: number;
  reserved: number;
  damaged: number;
  unitLandedCost: number;
}

export interface StockLedgerRecord {
  id: string;
  timestamp: string;
  productName: string;
  warehouseName: string;
  movementType: string;
  quantityDelta: number;
  balanceAfter: number;
  unitLandedCost: number;
  referenceId: string;
  reasonNotes?: string;
}

import {
  MASTER_INITIAL_PRODUCTS,
  MASTER_INITIAL_WAREHOUSE_STOCK,
  MASTER_INITIAL_STOCK_LEDGER,
  MASTER_INITIAL_CATEGORIES
} from './initialMasterData';

export const INITIAL_PRODUCTS: ProductItem[] = MASTER_INITIAL_PRODUCTS as ProductItem[];
export const INITIAL_WAREHOUSE_STOCK: WarehouseStockItem[] = MASTER_INITIAL_WAREHOUSE_STOCK as WarehouseStockItem[];
export const INITIAL_LEDGER: StockLedgerRecord[] = MASTER_INITIAL_STOCK_LEDGER as StockLedgerRecord[];

export const STORAGE_KEYS = {
  PRODUCTS: 'globotech_erp_products',
  WAREHOUSE_STOCK: 'globotech_erp_warehouse_stock',
  LEDGER: 'globotech_erp_stock_ledger',
  CATEGORIES: 'globotech_erp_categories',
  WAREHOUSES: 'globotech_erp_warehouses',
  DELETED_PRODUCT_SKUS: 'globotech_erp_deleted_product_skus',
};

export const INITIAL_CATEGORIES: string[] = MASTER_INITIAL_CATEGORIES;

export const INITIAL_WAREHOUSES: string[] = [
  'Main Warehouse (Tejgaon)',
  'Project Store (Site Depot)',
  'Office Store (Banani)',
  'Showroom (Gulshan)',
  'Chittagong Regional Depot',
  'Globo Store'
];

// Storage helper functions
export function getStoredCategories(): string[] {
  if (typeof window === 'undefined') return INITIAL_CATEGORIES;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error loading categories from storage:', e);
  }
  return INITIAL_CATEGORIES;
}

import { mirrorToIndexedDB } from '@/lib/erpBackup';
import { forceImmediateBackup } from '@/lib/autoBackupDaemon';

export function saveStoredCategories(categories: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    window.dispatchEvent(new CustomEvent('globotech_categories_updated', { detail: categories }));
    window.dispatchEvent(new Event('storage'));
    forceImmediateBackup('categories_update');
  } catch (e) {
    console.error('Error saving categories to storage:', e);
  }
}

export function getStoredWarehouses(): string[] {
  if (typeof window === 'undefined') return INITIAL_WAREHOUSES;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.WAREHOUSES);
    let parsedList: string[] = [];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsedList = parsed.filter(Boolean);
        }
      } catch (e) {}
    }
    // Automatically discover any custom warehouses stored in existing warehouse stock
    const stockStr = localStorage.getItem(STORAGE_KEYS.WAREHOUSE_STOCK);
    let stockWhs: string[] = [];
    if (stockStr) {
      try {
        const stock = JSON.parse(stockStr);
        if (Array.isArray(stock)) {
          stockWhs = stock.map((s: any) => s.warehouseName).filter(Boolean);
        }
      } catch (e) {}
    }
    const merged = Array.from(new Set([...INITIAL_WAREHOUSES, ...parsedList, ...stockWhs]));
    localStorage.setItem(STORAGE_KEYS.WAREHOUSES, JSON.stringify(merged));
    return merged;
  } catch (e) {
    console.error('Error loading warehouses from storage:', e);
  }
  return INITIAL_WAREHOUSES;
}

export function saveStoredWarehouses(warehouses: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.WAREHOUSES, JSON.stringify(warehouses));
    window.dispatchEvent(new CustomEvent('globotech_warehouses_updated', { detail: warehouses }));
    window.dispatchEvent(new Event('storage'));
    forceImmediateBackup('warehouses_update');
  } catch (e) {
    console.error('Error saving warehouses to storage:', e);
  }
}

export function getDeletedProductSkus(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.DELETED_PRODUCT_SKUS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {}
  return [];
}

export function recordDeletedProduct(product: { id?: string; sku?: string; name?: string }): void {
  if (typeof window === 'undefined') return;
  try {
    const list = getDeletedProductSkus();
    const set = new Set<string>(list.map((s) => s.trim().toUpperCase()));
    if (product.id) set.add(product.id.trim().toUpperCase());
    if (product.sku) set.add(product.sku.trim().toUpperCase());
    if (product.name) set.add(product.name.trim().toUpperCase());
    localStorage.setItem(STORAGE_KEYS.DELETED_PRODUCT_SKUS, JSON.stringify(Array.from(set)));
    forceImmediateBackup('product_deletion');
  } catch (e) {
    console.error('Error recording deleted product:', e);
  }
}

export function unrecordDeletedProduct(skuOrId: string): void {
  if (typeof window === 'undefined' || !skuOrId) return;
  try {
    const list = getDeletedProductSkus();
    const filtered = list.filter((s) => s.trim().toUpperCase() !== skuOrId.trim().toUpperCase());
    localStorage.setItem(STORAGE_KEYS.DELETED_PRODUCT_SKUS, JSON.stringify(filtered));
  } catch (e) {}
}

export function getStoredProducts(): ProductItem[] {
  if (typeof window === 'undefined') return INITIAL_PRODUCTS;
  try {
    const deletedSkus = new Set<string>(getDeletedProductSkus().map((s) => s.trim().toUpperCase()));

    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        // Exclude any deleted products
        const cleanedParsed = parsed.filter((p: ProductItem) => {
          const sku = (p.sku || '').trim().toUpperCase();
          const id = (p.id || '').trim().toUpperCase();
          const name = (p.name || '').trim().toUpperCase();
          return !deletedSkus.has(sku) && !deletedSkus.has(id) && !deletedSkus.has(name);
        });

        const existingSkus = new Set(
          cleanedParsed.map((p: ProductItem) => (p.sku || p.id || p.name).trim().toUpperCase())
        );

        // Never restore initial products if they were deleted by the user!
        const newInitials = INITIAL_PRODUCTS.filter((p) => {
          const sku = (p.sku || '').trim().toUpperCase();
          const id = (p.id || '').trim().toUpperCase();
          const name = (p.name || '').trim().toUpperCase();
          return !existingSkus.has(sku) && !deletedSkus.has(sku) && !deletedSkus.has(id) && !deletedSkus.has(name);
        });

        if (newInitials.length > 0 || cleanedParsed.length !== parsed.length) {
          const merged = [...cleanedParsed, ...newInitials];
          localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(merged));
          return merged;
        }
        return cleanedParsed;
      }
    }
  } catch (e) {
    console.error('Error loading products from storage:', e);
  }

  const deletedSkus = new Set<string>(getDeletedProductSkus().map((s) => s.trim().toUpperCase()));
  return INITIAL_PRODUCTS.filter((p) => {
    const sku = (p.sku || '').trim().toUpperCase();
    const id = (p.id || '').trim().toUpperCase();
    const name = (p.name || '').trim().toUpperCase();
    return !deletedSkus.has(sku) && !deletedSkus.has(id) && !deletedSkus.has(name);
  });
}

export function saveStoredProducts(products: ProductItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent('globotech_products_updated', { detail: products }));
    window.dispatchEvent(new Event('storage'));
    forceImmediateBackup('products_update');
  } catch (e) {
    console.error('Error saving products to storage:', e);
  }
}

export function getStoredWarehouseStock(): WarehouseStockItem[] {
  if (typeof window === 'undefined') return INITIAL_WAREHOUSE_STOCK;
  try {
    const deletedSkus = new Set<string>(getDeletedProductSkus().map((s) => s.trim().toUpperCase()));

    const saved = localStorage.getItem(STORAGE_KEYS.WAREHOUSE_STOCK);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const cleanedParsed = parsed.filter((s: WarehouseStockItem) => {
          const sku = (s.sku || '').trim().toUpperCase();
          const name = (s.productName || '').trim().toUpperCase();
          return !deletedSkus.has(sku) && !deletedSkus.has(name);
        });

        const existingKeys = new Set(
          cleanedParsed.map(
            (s: WarehouseStockItem) =>
              `${(s.sku || '').trim().toUpperCase()}-${(s.warehouseName || '').trim().toLowerCase()}`
          )
        );

        const newInitials = INITIAL_WAREHOUSE_STOCK.filter((s) => {
          const sku = (s.sku || '').trim().toUpperCase();
          const name = (s.productName || '').trim().toUpperCase();
          const key = `${sku}-${(s.warehouseName || '').trim().toLowerCase()}`;
          return !existingKeys.has(key) && !deletedSkus.has(sku) && !deletedSkus.has(name);
        });

        if (newInitials.length > 0 || cleanedParsed.length !== parsed.length) {
          const merged = [...cleanedParsed, ...newInitials];
          localStorage.setItem(STORAGE_KEYS.WAREHOUSE_STOCK, JSON.stringify(merged));
          return merged;
        }
        return cleanedParsed;
      }
    }
  } catch (e) {
    console.error('Error loading warehouse stock from storage:', e);
  }

  const deletedSkus = new Set<string>(getDeletedProductSkus().map((s) => s.trim().toUpperCase()));
  return INITIAL_WAREHOUSE_STOCK.filter((s) => {
    const sku = (s.sku || '').trim().toUpperCase();
    const name = (s.productName || '').trim().toUpperCase();
    return !deletedSkus.has(sku) && !deletedSkus.has(name);
  });
}

export function saveStoredWarehouseStock(stock: WarehouseStockItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.WAREHOUSE_STOCK, JSON.stringify(stock));
    window.dispatchEvent(new CustomEvent('globotech_stock_updated', { detail: stock }));
    window.dispatchEvent(new Event('storage'));
    forceImmediateBackup('stock_update');
  } catch (e) {
    console.error('Error saving warehouse stock to storage:', e);
  }
}

export function getStoredStockLedger(): StockLedgerRecord[] {
  if (typeof window === 'undefined') return INITIAL_LEDGER;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEDGER);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading stock ledger from storage:', e);
  }
  return INITIAL_LEDGER;
}

export function saveStoredStockLedger(ledger: StockLedgerRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.LEDGER, JSON.stringify(ledger));
    window.dispatchEvent(new CustomEvent('globotech_ledger_updated', { detail: ledger }));
    window.dispatchEvent(new Event('storage'));
    forceImmediateBackup('ledger_update');
  } catch (e) {
    console.error('Error saving stock ledger to storage:', e);
  }
}

