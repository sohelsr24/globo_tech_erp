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
};

export const INITIAL_CATEGORIES: string[] = MASTER_INITIAL_CATEGORIES;

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

export function saveStoredCategories(categories: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    window.dispatchEvent(new CustomEvent('globotech_categories_updated', { detail: categories }));
    window.dispatchEvent(new Event('storage'));
    mirrorToIndexedDB().catch(() => {});
  } catch (e) {
    console.error('Error saving categories to storage:', e);
  }
}

export function getStoredProducts(): ProductItem[] {
  if (typeof window === 'undefined') return INITIAL_PRODUCTS;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Error loading products from storage:', e);
  }
  return INITIAL_PRODUCTS;
}

export function saveStoredProducts(products: ProductItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent('globotech_products_updated', { detail: products }));
    window.dispatchEvent(new Event('storage'));
    mirrorToIndexedDB().catch(() => {});
  } catch (e) {
    console.error('Error saving products to storage:', e);
  }
}

export function getStoredWarehouseStock(): WarehouseStockItem[] {
  if (typeof window === 'undefined') return INITIAL_WAREHOUSE_STOCK;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.WAREHOUSE_STOCK);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Error loading warehouse stock from storage:', e);
  }
  return INITIAL_WAREHOUSE_STOCK;
}

export function saveStoredWarehouseStock(stock: WarehouseStockItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.WAREHOUSE_STOCK, JSON.stringify(stock));
    window.dispatchEvent(new CustomEvent('globotech_stock_updated', { detail: stock }));
    window.dispatchEvent(new Event('storage'));
    mirrorToIndexedDB().catch(() => {});
  } catch (e) {
    console.error('Error saving warehouse stock to storage:', e);
  }
}

export function getStoredStockLedger(): StockLedgerRecord[] {
  if (typeof window === 'undefined') return INITIAL_LEDGER;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEDGER);
    if (saved) return JSON.parse(saved);
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
    mirrorToIndexedDB().catch(() => {});
  } catch (e) {
    console.error('Error saving stock ledger to storage:', e);
  }
}
