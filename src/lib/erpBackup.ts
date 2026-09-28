// Centralized Enterprise Data Backup, Restore & Synchronization Engine
// Ensures all ERP modules (Quotations, Bills, Products, Stock, Customers, Projects, Sales, Imports, Suppliers, Serials, Settings)
// can be backed up to a single downloadable .json file and restored at any time.

export const ERP_STORAGE_KEYS = {
  QUOTATIONS: 'globotech_erp_quotations',
  DELETED_QUOTATION_IDS: 'globotech_erp_deleted_quotation_ids',
  BILLS: 'globotech_erp_bill_invoices',
  CUSTOMERS: 'globotech_erp_customers',
  PROJECTS: 'globotech_erp_projects',
  PRODUCTS: 'globotech_erp_products',
  WAREHOUSE_STOCK: 'globotech_erp_warehouse_stock',
  STOCK_LEDGER: 'globotech_erp_stock_ledger',
  CATEGORIES: 'globotech_erp_categories',
  SALES: 'globotech_erp_sales',
  IMPORTS: 'globotech_erp_imports',
  SUPPLIERS: 'globotech_erp_suppliers',
  SERIALS: 'globotech_erp_serials',
  SETTINGS: 'globotech_erp_settings',
  LAST_BACKUP_DATE: 'globotech_erp_last_backup_date'
} as const;

export interface ERPBackupPayload {
  meta: {
    app: string;
    company: string;
    version: string;
    exportedAt: string;
    timestamp: number;
    recordCounts: {
      quotations: number;
      bills: number;
      customers: number;
      projects: number;
      products: number;
      warehouseStock: number;
      stockLedger: number;
      categories: number;
      sales: number;
      imports: number;
      suppliers: number;
      serials: number;
    };
  };
  data: {
    quotations: any[];
    deletedQuotationIds: string[];
    bills: any[];
    customers: any[];
    projects: any[];
    products: any[];
    warehouseStock: any[];
    stockLedger: any[];
    categories: string[];
    sales: any[];
    imports: any[];
    suppliers: any[];
    serials: any[];
    settings: any;
  };
}

/**
 * Reads a JSON string from localStorage safely with a fallback
 */
function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item);
  } catch (err) {
    console.error(`Failed to read ${key} from storage:`, err);
    return fallback;
  }
}

/**
 * Assembles a complete backup payload of all ERP modules
 */
export function generateERPBackupPayload(): ERPBackupPayload {
  const quotations = readStorage<any[]>(ERP_STORAGE_KEYS.QUOTATIONS, []);
  const deletedQuotationIds = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_QUOTATION_IDS, []);
  const bills = readStorage<any[]>(ERP_STORAGE_KEYS.BILLS, []);
  const customers = readStorage<any[]>(ERP_STORAGE_KEYS.CUSTOMERS, []);
  const projects = readStorage<any[]>(ERP_STORAGE_KEYS.PROJECTS, []);
  const products = readStorage<any[]>(ERP_STORAGE_KEYS.PRODUCTS, []);
  const warehouseStock = readStorage<any[]>(ERP_STORAGE_KEYS.WAREHOUSE_STOCK, []);
  const stockLedger = readStorage<any[]>(ERP_STORAGE_KEYS.STOCK_LEDGER, []);
  const categories = readStorage<string[]>(ERP_STORAGE_KEYS.CATEGORIES, []);
  const sales = readStorage<any[]>(ERP_STORAGE_KEYS.SALES, []);
  const imports = readStorage<any[]>(ERP_STORAGE_KEYS.IMPORTS, []);
  const suppliers = readStorage<any[]>(ERP_STORAGE_KEYS.SUPPLIERS, []);
  const serials = readStorage<any[]>(ERP_STORAGE_KEYS.SERIALS, []);
  const settings = readStorage<any>(ERP_STORAGE_KEYS.SETTINGS, {});

  const now = new Date();

  return {
    meta: {
      app: 'Globo Tech Enterprise ERP',
      company: 'Globo Tech Bangladesh',
      version: '1.0.0',
      exportedAt: now.toISOString(),
      timestamp: now.getTime(),
      recordCounts: {
        quotations: quotations.length,
        bills: bills.length,
        customers: customers.length,
        projects: projects.length,
        products: products.length,
        warehouseStock: warehouseStock.length,
        stockLedger: stockLedger.length,
        categories: categories.length,
        sales: sales.length,
        imports: imports.length,
        suppliers: suppliers.length,
        serials: serials.length
      }
    },
    data: {
      quotations,
      deletedQuotationIds,
      bills,
      customers,
      projects,
      products,
      warehouseStock,
      stockLedger,
      categories,
      sales,
      imports,
      suppliers,
      serials,
      settings
    }
  };
}

/**
 * Triggers a browser download of the complete ERP backup as a timestamped .json file
 */
export function downloadERPBackupFile(): { filename: string; totalRecords: number } {
  const payload = generateERPBackupPayload();
  const dateStr = new Date().toISOString().replace(/T/, '_').replace(/:/g, '-').slice(0, 19);
  const filename = `globotech_erp_backup_${dateStr}.json`;

  const jsonContent = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  // Update last backup date
  if (typeof window !== 'undefined') {
    localStorage.setItem(ERP_STORAGE_KEYS.LAST_BACKUP_DATE, new Date().toISOString());
  }

  const counts = payload.meta.recordCounts;
  const total = Object.values(counts).reduce((acc, c) => acc + c, 0);

  return { filename, totalRecords: total };
}

/**
 * Restores all ERP modules from a valid JSON backup string
 */
export function restoreERPBackupData(jsonString: string): { success: boolean; message: string; counts?: any } {
  try {
    const payload = JSON.parse(jsonString) as ERPBackupPayload;

    if (!payload || !payload.data) {
      return { success: false, message: 'Invalid backup file structure. Missing data payload.' };
    }

    const { data } = payload;

    if (typeof window !== 'undefined') {
      if (Array.isArray(data.quotations)) {
        localStorage.setItem(ERP_STORAGE_KEYS.QUOTATIONS, JSON.stringify(data.quotations));
      }
      if (Array.isArray(data.deletedQuotationIds)) {
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_QUOTATION_IDS, JSON.stringify(data.deletedQuotationIds));
      }
      if (Array.isArray(data.bills)) {
        localStorage.setItem(ERP_STORAGE_KEYS.BILLS, JSON.stringify(data.bills));
      }
      if (Array.isArray(data.customers)) {
        localStorage.setItem(ERP_STORAGE_KEYS.CUSTOMERS, JSON.stringify(data.customers));
      }
      if (Array.isArray(data.projects)) {
        localStorage.setItem(ERP_STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
      }
      if (Array.isArray(data.products)) {
        localStorage.setItem(ERP_STORAGE_KEYS.PRODUCTS, JSON.stringify(data.products));
      }
      if (Array.isArray(data.warehouseStock)) {
        localStorage.setItem(ERP_STORAGE_KEYS.WAREHOUSE_STOCK, JSON.stringify(data.warehouseStock));
      }
      if (Array.isArray(data.stockLedger)) {
        localStorage.setItem(ERP_STORAGE_KEYS.STOCK_LEDGER, JSON.stringify(data.stockLedger));
      }
      if (Array.isArray(data.categories)) {
        localStorage.setItem(ERP_STORAGE_KEYS.CATEGORIES, JSON.stringify(data.categories));
      }
      if (Array.isArray(data.sales)) {
        localStorage.setItem(ERP_STORAGE_KEYS.SALES, JSON.stringify(data.sales));
      }
      if (Array.isArray(data.imports)) {
        localStorage.setItem(ERP_STORAGE_KEYS.IMPORTS, JSON.stringify(data.imports));
      }
      if (Array.isArray(data.suppliers)) {
        localStorage.setItem(ERP_STORAGE_KEYS.SUPPLIERS, JSON.stringify(data.suppliers));
      }
      if (Array.isArray(data.serials)) {
        localStorage.setItem(ERP_STORAGE_KEYS.SERIALS, JSON.stringify(data.serials));
      }
      if (data.settings && typeof data.settings === 'object') {
        localStorage.setItem(ERP_STORAGE_KEYS.SETTINGS, JSON.stringify(data.settings));
      }

      localStorage.setItem(ERP_STORAGE_KEYS.LAST_BACKUP_DATE, new Date().toISOString());

      // Dispatch global events to inform active views
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('globotech_backup_restored'));
    }

    return {
      success: true,
      message: 'All ERP records have been restored successfully!',
      counts: payload.meta?.recordCounts
    };
  } catch (err: any) {
    return {
      success: false,
      message: `Failed to restore backup: ${err?.message || 'Corrupted or unreadable JSON file.'}`
    };
  }
}

/**
 * Returns current counts and last backup date for status badges
 */
export function getERPStorageStatus() {
  const payload = generateERPBackupPayload();
  const lastBackup = typeof window !== 'undefined' ? localStorage.getItem(ERP_STORAGE_KEYS.LAST_BACKUP_DATE) : null;

  return {
    recordCounts: payload.meta.recordCounts,
    lastBackupDate: lastBackup,
    totalRecords: Object.values(payload.meta.recordCounts).reduce((a, b) => a + b, 0)
  };
}
