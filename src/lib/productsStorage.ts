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

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'PRD-001',
    sku: 'SKU-CCTV-4MP-DOME',
    barcode: '880192837401',
    name: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'pcs',
    stock: 40,
    minStock: 25,
    purchasePriceCNY: 500,
    currentLandedCost: 10000,
    retailPrice: 15000,
    wholesalePrice: 13500,
    projectPrice: 12500,
    dealerPrice: 12000,
    isSerialTracked: true,
  },
  {
    id: 'PRD-002',
    sku: 'SKU-NET-SW24G',
    barcode: '880192837402',
    name: 'TP-Link 24-Port Gigabit Managed PoE+ Switch',
    category: 'Networking',
    brand: 'TP-Link',
    unit: 'pcs',
    stock: 8,
    minStock: 12, // LOW STOCK
    purchasePriceCNY: 1250,
    currentLandedCost: 24000,
    retailPrice: 34000,
    wholesalePrice: 31000,
    projectPrice: 29500,
    dealerPrice: 28500,
    isSerialTracked: true,
  },
  {
    id: 'PRD-003',
    sku: 'SKU-CCTV-NVR16',
    barcode: '880192837403',
    name: 'Hikvision 16-Channel 4K NVR with 2-SATA',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'unit',
    stock: 5,
    minStock: 8, // LOW STOCK
    purchasePriceCNY: 850,
    currentLandedCost: 16500,
    retailPrice: 24500,
    wholesalePrice: 22000,
    projectPrice: 20500,
    dealerPrice: 19800,
    isSerialTracked: true,
  },
  {
    id: 'PRD-004',
    sku: 'SKU-NET-CABLE-CAT6',
    barcode: '880192837404',
    name: 'Cat6 UTP Pure Copper Industrial Cable (305m)',
    category: 'Networking',
    brand: 'D-Link',
    unit: 'box',
    stock: 65,
    minStock: 20,
    purchasePriceCNY: 480,
    currentLandedCost: 9200,
    retailPrice: 13500,
    wholesalePrice: 12200,
    projectPrice: 11500,
    dealerPrice: 11000,
    isSerialTracked: false,
  },
  {
    id: 'PRD-005',
    sku: 'SKU-SEC-WALKIE-DMR',
    barcode: '880192837405',
    name: 'Motorola Digital DMR Walkie Talkie 5W',
    category: 'Security & Wireless',
    brand: 'Motorola',
    unit: 'set',
    stock: 32,
    minStock: 15,
    purchasePriceCNY: 380,
    currentLandedCost: 7500,
    retailPrice: 12000,
    wholesalePrice: 10500,
    projectPrice: 9800,
    dealerPrice: 9200,
    isSerialTracked: true,
  },
  {
    id: 'PRD-006',
    sku: 'SKU-PWR-UPS3KVA',
    barcode: '880192837406',
    name: 'APC Smart-UPS On-Line 3KVA 230V',
    category: 'Data Center & Power',
    brand: 'APC by Schneider',
    unit: 'unit',
    stock: 14,
    minStock: 5,
    purchasePriceCNY: 2800,
    currentLandedCost: 52000,
    retailPrice: 75000,
    wholesalePrice: 68000,
    projectPrice: 65000,
    dealerPrice: 62000,
    isSerialTracked: true,
  },
  {
    id: 'PRD-007',
    sku: 'SKU-NET-CISCO-2960X',
    barcode: '880192837407',
    name: 'Cisco Catalyst 2960-X 48 GigE 4x1G SFP',
    category: 'Networking',
    brand: 'Cisco',
    unit: 'unit',
    stock: 6,
    minStock: 4,
    purchasePriceCNY: 4500,
    currentLandedCost: 85000,
    retailPrice: 120000,
    wholesalePrice: 110000,
    projectPrice: 105000,
    dealerPrice: 98000,
    isSerialTracked: true,
  },
  {
    id: 'PRD-008',
    sku: 'SKU-STR-SEAGATE-4TB',
    barcode: '880192837408',
    name: 'Seagate SkyHawk 4TB Surveillance Hard Drive',
    category: 'CCTV & Surveillance',
    brand: 'Seagate',
    unit: 'pcs',
    stock: 14,
    minStock: 10,
    purchasePriceCNY: 420,
    currentLandedCost: 8000,
    retailPrice: 12500,
    wholesalePrice: 11200,
    projectPrice: 10500,
    dealerPrice: 10000,
    isSerialTracked: true,
  }
];

export const INITIAL_WAREHOUSE_STOCK: WarehouseStockItem[] = [
  {
    id: 'st-01',
    warehouseName: 'Main Warehouse (Tejgaon)',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    sku: 'SKU-CCTV-4MP-DOME',
    available: 40,
    reserved: 0,
    damaged: 0,
    unitLandedCost: 10000,
  },
  {
    id: 'st-02',
    warehouseName: 'Main Warehouse (Tejgaon)',
    productName: 'TP-Link 24-Port Gigabit Managed PoE+ Switch',
    sku: 'SKU-NET-SW24G',
    available: 8,
    reserved: 2,
    damaged: 0,
    unitLandedCost: 24000,
  },
  {
    id: 'st-03',
    warehouseName: 'Project Store (Site Depot)',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    sku: 'SKU-CCTV-4MP-DOME',
    available: 10,
    reserved: 0,
    damaged: 0,
    unitLandedCost: 10000,
  },
  {
    id: 'st-04',
    warehouseName: 'Main Warehouse (Tejgaon)',
    productName: 'Cat6 UTP Pure Copper Industrial Cable (305m)',
    sku: 'SKU-NET-CABLE-CAT6',
    available: 65,
    reserved: 0,
    damaged: 0,
    unitLandedCost: 9200,
  }
];

export const INITIAL_LEDGER: StockLedgerRecord[] = [
  {
    id: 'led-05',
    timestamp: '2026-09-24 16:30',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'PROJECT_ISSUE',
    quantityDelta: -10,
    balanceAfter: 40,
    unitLandedCost: 10000,
    referenceId: 'PRJ-2026-001',
    reasonNotes: 'Consumed 10 pcs for ABC Bank CCTV Installation Project'
  },
  {
    id: 'led-04',
    timestamp: '2026-09-22 14:15',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'SALE_INVOICE',
    quantityDelta: -20,
    balanceAfter: 50,
    unitLandedCost: 10000,
    referenceId: 'INV-2026-9002',
    reasonNotes: 'Wholesale sale to Beximco Industrial Fabrics'
  },
  {
    id: 'led-03',
    timestamp: '2026-09-20 11:00',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'SALE_INVOICE',
    quantityDelta: -30,
    balanceAfter: 70,
    unitLandedCost: 10000,
    referenceId: 'INV-2026-9001',
    reasonNotes: 'Retail sale to ABC Bank PLC'
  },
  {
    id: 'led-02',
    timestamp: '2026-09-15 09:30',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'PURCHASE_GRN',
    quantityDelta: 100,
    balanceAfter: 100,
    unitLandedCost: 10000,
    referenceId: 'GRN-2026-001',
    reasonNotes: 'Received 100 pcs from China Import IMP-2026-001'
  },
  {
    id: 'led-01',
    timestamp: '2026-09-01 08:00',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'OPENING_STOCK',
    quantityDelta: 40,
    balanceAfter: 40,
    unitLandedCost: 10000,
    referenceId: 'INIT-2026',
    reasonNotes: 'Opening initial audited balance'
  }
];

export const STORAGE_KEYS = {
  PRODUCTS: 'globotech_erp_products',
  WAREHOUSE_STOCK: 'globotech_erp_warehouse_stock',
  LEDGER: 'globotech_erp_stock_ledger',
  CATEGORIES: 'globotech_erp_categories',
};

export const INITIAL_CATEGORIES: string[] = [
  'CCTV & Surveillance',
  'Networking',
  'Data Center & Power',
  'Security & Wireless',
  'Accessories & Cables',
  'Fire Safety & Access Control',
  'Stationery & Paper',
  'Office Supplies & Consumables'
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

export function saveStoredCategories(categories: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    window.dispatchEvent(new CustomEvent('globotech_categories_updated', { detail: categories }));
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
  } catch (e) {
    console.error('Error saving stock ledger to storage:', e);
  }
}
