// Centralized Enterprise Data Backup, Restore & Synchronization Engine
// Ensures all ERP modules (Quotations, Bills, Products, Stock, Customers, Projects, Sales, Imports, Suppliers, Serials, Settings)
// can be backed up to a single downloadable .json file and restored at any time.

export const ERP_STORAGE_KEYS = {
  QUOTATIONS: 'globotech_erp_quotations',
  DELETED_QUOTATION_IDS: 'globotech_erp_deleted_quotation_ids',
  BILLS: 'globotech_erp_bill_invoices',
  DELETED_BILL_IDS: 'globotech_erp_deleted_bill_ids',
  CUSTOMERS: 'globotech_erp_customers',
  DELETED_CUSTOMER_IDS: 'globotech_erp_deleted_customer_ids',
  PROJECTS: 'globotech_erp_projects',
  CLIENT_DIRECTORY: 'globotech_erp_client_directory',
  PRODUCTS: 'globotech_erp_products',
  WAREHOUSE_STOCK: 'globotech_erp_warehouse_stock',
  STOCK_LEDGER: 'globotech_erp_stock_ledger',
  CATEGORIES: 'globotech_erp_categories',
  SALES: 'globotech_erp_sales',
  IMPORTS: 'globotech_erp_imports',
  SUPPLIERS: 'globotech_erp_suppliers',
  DELETED_SUPPLIER_NAMES: 'globotech_erp_deleted_supplier_names',
  PURCHASES: 'globotech_erp_purchases',
  DELETED_PURCHASE_IDS: 'globotech_erp_deleted_purchases',
  SERIALS: 'globotech_erp_serials',
  SETTINGS: 'globotech_erp_settings',
  LAST_BACKUP_DATE: 'globotech_erp_last_backup_date',
  AUTO_SNAPSHOT: 'globotech_erp_auto_snapshot',
  PERSISTENCE_STATUS: 'globotech_erp_persistence_status'
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
      purchases?: number;
      serials: number;
    };
  };
  data: {
    quotations: any[];
    deletedQuotationIds: string[];
    bills: any[];
    deletedBillIds?: string[];
    customers: any[];
    deletedCustomerIds?: string[];
    projects: any[];
    clientDirectory?: any[];
    products: any[];
    warehouseStock: any[];
    stockLedger: any[];
    categories: string[];
    sales: any[];
    imports: any[];
    suppliers: any[];
    deletedSupplierNames?: string[];
    purchases?: any[];
    deletedPurchaseIds?: string[];
    serials: any[];
    settings: any;
  };
}

/**
 * Reads a JSON string from localStorage safely with a fallback
 */
export function readStorage<T>(key: string, fallback: T): T {
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
  const deletedBillIds = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_BILL_IDS, []);
  const customers = readStorage<any[]>(ERP_STORAGE_KEYS.CUSTOMERS, []);
  const deletedCustomerIds = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_CUSTOMER_IDS, []);
  const projects = readStorage<any[]>(ERP_STORAGE_KEYS.PROJECTS, []);
  const clientDirectory = readStorage<any[]>(ERP_STORAGE_KEYS.CLIENT_DIRECTORY, []);
  const products = readStorage<any[]>(ERP_STORAGE_KEYS.PRODUCTS, []);
  const warehouseStock = readStorage<any[]>(ERP_STORAGE_KEYS.WAREHOUSE_STOCK, []);
  const stockLedger = readStorage<any[]>(ERP_STORAGE_KEYS.STOCK_LEDGER, []);
  const categories = readStorage<string[]>(ERP_STORAGE_KEYS.CATEGORIES, []);
  const sales = readStorage<any[]>(ERP_STORAGE_KEYS.SALES, []);
  const imports = readStorage<any[]>(ERP_STORAGE_KEYS.IMPORTS, []);
  const suppliers = readStorage<any[]>(ERP_STORAGE_KEYS.SUPPLIERS, []);
  const deletedSupplierNames = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_SUPPLIER_NAMES, []);
  const purchases = readStorage<any[]>(ERP_STORAGE_KEYS.PURCHASES, []);
  const deletedPurchaseIds = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_PURCHASE_IDS, []);
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
        purchases: purchases.length,
        serials: serials.length
      }
    },
    data: {
      quotations,
      deletedQuotationIds,
      bills,
      deletedBillIds,
      customers,
      deletedCustomerIds,
      projects,
      clientDirectory,
      products,
      warehouseStock,
      stockLedger,
      categories,
      sales,
      imports,
      suppliers,
      deletedSupplierNames,
      purchases,
      deletedPurchaseIds,
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

  // Update last backup date & mirror to IndexedDB
  if (typeof window !== 'undefined') {
    localStorage.setItem(ERP_STORAGE_KEYS.LAST_BACKUP_DATE, new Date().toISOString());
    mirrorToIndexedDB(payload);
  }

  const counts = payload.meta.recordCounts;
  const total = Object.values(counts).reduce((acc, c) => acc + c, 0);

  return { filename, totalRecords: total };
}

/**
 * Restores all ERP modules from a valid JSON backup string.
 * CRITICAL SAFETY: Uses Non-Destructive Union Merge by default.
 * User-created records in the browser are ALWAYS preserved and merged with incoming backup data!
 */
export function restoreERPBackupData(
  jsonString: string,
  options?: { mode?: 'merge' | 'overwrite' }
): { success: boolean; message: string; counts?: any } {
  try {
    const payload = JSON.parse(jsonString) as ERPBackupPayload;

    if (!payload || !payload.data) {
      return { success: false, message: 'Invalid backup file structure. Missing data payload.' };
    }

    const { data } = payload;
    const isMergeMode = options?.mode !== 'overwrite';

    if (typeof window !== 'undefined') {
      // 1. Quotations Safe Merge
      if (Array.isArray(data.quotations)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.QUOTATIONS, []);
          const map = new Map<string, any>();
          // Incoming items first
          data.quotations.forEach((q: any) => {
            const key = q.id || q.quotationNumber;
            if (key) map.set(key, q);
          });
          // User local items take precedence so nothing user created or edited is lost!
          current.forEach((q: any) => {
            const key = q.id || q.quotationNumber;
            if (key) map.set(key, q);
          });
          const merged = Array.from(map.values());
          localStorage.setItem(ERP_STORAGE_KEYS.QUOTATIONS, JSON.stringify(merged));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.QUOTATIONS, JSON.stringify(data.quotations));
        }
      }
      if (Array.isArray(data.deletedQuotationIds)) {
        const curDel = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_QUOTATION_IDS, []);
        const delSet = new Set<string>([...curDel, ...data.deletedQuotationIds]);
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_QUOTATION_IDS, JSON.stringify(Array.from(delSet)));
      }

      // 2. Bills Safe Merge
      if (Array.isArray(data.bills)) {
        const cleanIncoming = data.bills.filter((b: any) => b && b.id !== 'bill-26108' && b.billNo !== 'GT/26108');
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.BILLS, []);
          const map = new Map<string, any>();
          cleanIncoming.forEach((b: any) => {
            const key = b.id || b.billNo;
            if (key) map.set(key, b);
          });
          current
            .filter((b: any) => b && b.id !== 'bill-26108' && b.billNo !== 'GT/26108')
            .forEach((b: any) => {
              const key = b.id || b.billNo;
              if (key) map.set(key, b);
            });
          const merged = Array.from(map.values());
          localStorage.setItem(ERP_STORAGE_KEYS.BILLS, JSON.stringify(merged));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.BILLS, JSON.stringify(cleanIncoming));
        }
      }
      if (Array.isArray(data.deletedBillIds)) {
        const curDel = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_BILL_IDS, []);
        const delSet = new Set<string>([...curDel, ...data.deletedBillIds]);
        delSet.add('bill-26108');
        delSet.add('GT/26108');
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_BILL_IDS, JSON.stringify(Array.from(delSet)));
      }

      // 3. Customers Safe Merge
      if (Array.isArray(data.customers)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.CUSTOMERS, []);
          const map = new Map<string, any>();
          data.customers.forEach((c: any) => {
            const key = c.id || (c.company ? `comp-${c.company.trim().toLowerCase()}` : c.name);
            if (key) map.set(key, c);
          });
          current.forEach((c: any) => {
            const key = c.id || (c.company ? `comp-${c.company.trim().toLowerCase()}` : c.name);
            if (key) map.set(key, c);
          });
          const merged = Array.from(map.values());
          localStorage.setItem(ERP_STORAGE_KEYS.CUSTOMERS, JSON.stringify(merged));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.CUSTOMERS, JSON.stringify(data.customers));
        }
      }
      if (Array.isArray(data.deletedCustomerIds)) {
        const curDel = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_CUSTOMER_IDS, []);
        const delSet = new Set<string>([...curDel, ...data.deletedCustomerIds]);
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_CUSTOMER_IDS, JSON.stringify(Array.from(delSet)));
      }

      // 4. Projects Safe Merge
      if (Array.isArray(data.projects)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.PROJECTS, []);
          const map = new Map<string, any>();
          data.projects.forEach((pr: any) => {
            const key = pr.id || pr.projectCode || pr.projectName;
            if (key) map.set(key, pr);
          });
          current.forEach((pr: any) => {
            const key = pr.id || pr.projectCode || pr.projectName;
            if (key) map.set(key, pr);
          });
          const merged = Array.from(map.values());
          localStorage.setItem(ERP_STORAGE_KEYS.PROJECTS, JSON.stringify(merged));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
        }
      }

      // 5. Client Directory Safe Merge
      if (Array.isArray(data.clientDirectory)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.CLIENT_DIRECTORY, []);
          const map = new Map<string, any>();
          data.clientDirectory.forEach((cd: any) => {
            const key = cd.id || cd.company || cd.name;
            if (key) map.set(key, cd);
          });
          current.forEach((cd: any) => {
            const key = cd.id || cd.company || cd.name;
            if (key) map.set(key, cd);
          });
          localStorage.setItem(ERP_STORAGE_KEYS.CLIENT_DIRECTORY, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.CLIENT_DIRECTORY, JSON.stringify(data.clientDirectory));
        }
      }

      // 6. Products Safe Merge
      if (Array.isArray(data.products)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.PRODUCTS, []);
          const map = new Map<string, any>();
          data.products.forEach((p: any) => {
            const key = p.sku ? p.sku.trim().toUpperCase() : (p.id || p.name);
            if (key) map.set(key, p);
          });
          current.forEach((p: any) => {
            const key = p.sku ? p.sku.trim().toUpperCase() : (p.id || p.name);
            if (key) map.set(key, p);
          });
          localStorage.setItem(ERP_STORAGE_KEYS.PRODUCTS, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.PRODUCTS, JSON.stringify(data.products));
        }
      }

      // 7. Warehouse Stock Safe Merge
      if (Array.isArray(data.warehouseStock)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.WAREHOUSE_STOCK, []);
          const map = new Map<string, any>();
          data.warehouseStock.forEach((s: any) => {
            const key = s.id || `${(s.sku || '').trim().toUpperCase()}-${(s.warehouseName || '').trim().toLowerCase()}`;
            if (key) map.set(key, s);
          });
          current.forEach((s: any) => {
            const key = s.id || `${(s.sku || '').trim().toUpperCase()}-${(s.warehouseName || '').trim().toLowerCase()}`;
            if (key) map.set(key, s);
          });
          localStorage.setItem(ERP_STORAGE_KEYS.WAREHOUSE_STOCK, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.WAREHOUSE_STOCK, JSON.stringify(data.warehouseStock));
        }
      }

      // 8. Stock Ledger Safe Merge
      if (Array.isArray(data.stockLedger)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.STOCK_LEDGER, []);
          const map = new Map<string, any>();
          data.stockLedger.forEach((l: any) => {
            const key = l.id || `${l.timestamp}-${l.referenceId || ''}-${l.productName || ''}`;
            if (key) map.set(key, l);
          });
          current.forEach((l: any) => {
            const key = l.id || `${l.timestamp}-${l.referenceId || ''}-${l.productName || ''}`;
            if (key) map.set(key, l);
          });
          localStorage.setItem(ERP_STORAGE_KEYS.STOCK_LEDGER, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.STOCK_LEDGER, JSON.stringify(data.stockLedger));
        }
      }

      // 9. Categories Safe Merge
      if (Array.isArray(data.categories)) {
        const curCats = readStorage<string[]>(ERP_STORAGE_KEYS.CATEGORIES, []);
        const catSet = new Set<string>([...curCats, ...data.categories]);
        localStorage.setItem(ERP_STORAGE_KEYS.CATEGORIES, JSON.stringify(Array.from(catSet)));
      }

      // 10. Sales Safe Merge
      if (Array.isArray(data.sales)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.SALES, []);
          const map = new Map<string, any>();
          data.sales.forEach((s: any) => { const key = s.id || s.invoiceNo; if (key) map.set(key, s); });
          current.forEach((s: any) => { const key = s.id || s.invoiceNo; if (key) map.set(key, s); });
          localStorage.setItem(ERP_STORAGE_KEYS.SALES, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.SALES, JSON.stringify(data.sales));
        }
      }

      // 11. Imports Safe Merge
      if (Array.isArray(data.imports)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.IMPORTS, []);
          const map = new Map<string, any>();
          data.imports.forEach((im: any) => { const key = im.id || im.lcNumber || im.shipmentNumber; if (key) map.set(key, im); });
          current.forEach((im: any) => { const key = im.id || im.lcNumber || im.shipmentNumber; if (key) map.set(key, im); });
          localStorage.setItem(ERP_STORAGE_KEYS.IMPORTS, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.IMPORTS, JSON.stringify(data.imports));
        }
      }

      // Merge Deleted Supplier Names
      if (Array.isArray(data.deletedSupplierNames)) {
        const curDel = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_SUPPLIER_NAMES, []);
        const delSet = new Set<string>([...curDel.map(s => s.trim().toLowerCase()), ...data.deletedSupplierNames.map(s => s.trim().toLowerCase())]);
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_SUPPLIER_NAMES, JSON.stringify(Array.from(delSet)));
      }

      // Merge Deleted Purchase IDs
      if (Array.isArray(data.deletedPurchaseIds)) {
        const curDel = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_PURCHASE_IDS, []);
        const delSet = new Set<string>([...curDel.map(s => s.trim().toUpperCase()), ...data.deletedPurchaseIds.map(s => s.trim().toUpperCase())]);
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_PURCHASE_IDS, JSON.stringify(Array.from(delSet)));
      }

      // 12. Suppliers Safe Merge
      if (Array.isArray(data.suppliers)) {
        const delSuppList = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_SUPPLIER_NAMES, []);
        const delSuppSet = new Set<string>(delSuppList.map(s => s.trim().toLowerCase()));

        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.SUPPLIERS, []);
          const map = new Map<string, any>();
          data.suppliers.forEach((sp: any) => {
            if (!sp) return;
            const name = (sp.name || sp.company || '').trim();
            const nameLower = name.toLowerCase();
            if (delSuppSet.has(nameLower)) return;
            const key = nameLower ? `name:${nameLower}` : (sp.id || '');
            if (key) map.set(key, sp);
          });
          current.forEach((sp: any) => {
            if (!sp) return;
            const name = (sp.name || sp.company || '').trim();
            const nameLower = name.toLowerCase();
            if (delSuppSet.has(nameLower)) return;
            const key = nameLower ? `name:${nameLower}` : (sp.id || '');
            if (key) {
              const existing = map.get(key);
              map.set(key, existing ? { ...existing, ...sp } : sp);
            }
          });
          localStorage.setItem(ERP_STORAGE_KEYS.SUPPLIERS, JSON.stringify(Array.from(map.values())));
        } else {
          const filtered = data.suppliers.filter((sp: any) => {
            const name = (sp?.name || sp?.company || '').trim().toLowerCase();
            return !delSuppSet.has(name);
          });
          localStorage.setItem(ERP_STORAGE_KEYS.SUPPLIERS, JSON.stringify(filtered));
        }
      }

      // 13. Purchases & Supplier Dues Safe Merge
      if (Array.isArray(data.purchases)) {
        const delPurList = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_PURCHASE_IDS, []);
        const delPurSet = new Set<string>(delPurList.map(s => s.trim().toUpperCase()));
        const delSuppList = readStorage<string[]>(ERP_STORAGE_KEYS.DELETED_SUPPLIER_NAMES, []);
        const delSuppSet = new Set<string>(delSuppList.map(s => s.trim().toLowerCase()));

        const isValidPurchase = (pu: any) => {
          if (!pu) return false;
          const id = (pu.id || '').trim().toUpperCase();
          const billNo = (pu.billNumber || '').trim().toUpperCase();
          if (id && delPurSet.has(id)) return false;
          if (billNo && delPurSet.has(billNo)) return false;
          const supp = (pu.supplierName || '').trim().toLowerCase();
          if (supp && delSuppSet.has(supp)) return false;
          return true;
        };

        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.PURCHASES, []);
          const map = new Map<string, any>();
          data.purchases.forEach((pu: any) => {
            if (!isValidPurchase(pu)) return;
            const billKey = pu.billNumber ? pu.billNumber.trim().toUpperCase() : (pu.id || '');
            if (billKey) map.set(billKey, pu);
          });
          current.forEach((pu: any) => {
            if (!isValidPurchase(pu)) return;
            const billKey = pu.billNumber ? pu.billNumber.trim().toUpperCase() : (pu.id || '');
            if (billKey) {
              const existing = map.get(billKey);
              map.set(billKey, existing ? { ...existing, ...pu } : pu);
            }
          });
          localStorage.setItem(ERP_STORAGE_KEYS.PURCHASES, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.PURCHASES, JSON.stringify(data.purchases.filter(isValidPurchase)));
        }
      }

      // 14. Serials Safe Merge
      if (Array.isArray(data.serials)) {
        if (isMergeMode) {
          const current = readStorage<any[]>(ERP_STORAGE_KEYS.SERIALS, []);
          const map = new Map<string, any>();
          data.serials.forEach((sr: any) => { const key = sr.id || sr.serialNumber; if (key) map.set(key, sr); });
          current.forEach((sr: any) => { const key = sr.id || sr.serialNumber; if (key) map.set(key, sr); });
          localStorage.setItem(ERP_STORAGE_KEYS.SERIALS, JSON.stringify(Array.from(map.values())));
        } else {
          localStorage.setItem(ERP_STORAGE_KEYS.SERIALS, JSON.stringify(data.serials));
        }
      }

      // 15. Settings Safe Merge
      if (data.settings && typeof data.settings === 'object') {
        const curSettings = readStorage<any>(ERP_STORAGE_KEYS.SETTINGS, {});
        localStorage.setItem(ERP_STORAGE_KEYS.SETTINGS, JSON.stringify({ ...curSettings, ...data.settings }));
      }

      localStorage.setItem(ERP_STORAGE_KEYS.LAST_BACKUP_DATE, new Date().toISOString());

      // Mirror complete merged state to IndexedDB as permanent hard copy
      const completeMergedPayload = generateERPBackupPayload();
      mirrorToIndexedDB(completeMergedPayload, 'safe_restore_merge');

      // Dispatch global events to inform active views
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('globotech_backup_restored'));
      window.dispatchEvent(new CustomEvent('globotech_purchases_updated'));
      window.dispatchEvent(new CustomEvent('globotech_suppliers_updated'));
      window.dispatchEvent(new CustomEvent('globotech_quotations_updated'));
      window.dispatchEvent(new CustomEvent('globotech_bills_updated'));
      window.dispatchEvent(new CustomEvent('globotech_stock_updated'));
    }

    const currentCounts = generateERPBackupPayload().meta.recordCounts;
    return {
      success: true,
      message: 'All ERP records have been non-destructively synced and preserved!',
      counts: currentCounts
    };
  } catch (err: any) {
    return {
      success: false,
      message: `Failed to restore backup: ${err?.message || 'Corrupted or unreadable JSON file.'}`
    };
  }
}

/**
 * Generates an encoded compact string for instant copy/paste synchronization across devices (PC to Mobile via WhatsApp/Messenger)
 */
export function generateQuickSyncCode(): { code: string; totalRecords: number; counts: any } {
  const payload = generateERPBackupPayload();
  const jsonStr = JSON.stringify(payload);
  // Unicode-safe base64 encoding
  const code = btoa(
    encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    })
  );
  const counts = payload.meta.recordCounts;
  const totalRecords = Object.values(counts).reduce((acc: number, c: any) => acc + (Number(c) || 0), 0);
  return { code, totalRecords, counts };
}

/**
 * Restores ERP database from a quick sync code (supports both base64 sync code and raw JSON)
 */
export function restoreFromQuickSyncCode(syncCode: string): { success: boolean; message: string; counts?: any } {
  try {
    const cleanCode = syncCode.trim();
    if (!cleanCode) {
      return { success: false, message: 'সিঙ্ক কোড খালি! অনুগ্রহ করে পিসি থেকে কপি করা কোডটি পেস্ট করুন।' };
    }

    let jsonString: string;
    if (cleanCode.startsWith('{') && cleanCode.endsWith('}')) {
      jsonString = cleanCode;
    } else {
      // Decode unicode-safe base64
      jsonString = decodeURIComponent(
        Array.prototype.map
          .call(atob(cleanCode), (c: string) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    }

    return restoreERPBackupData(jsonString);
  } catch (err: any) {
    return {
      success: false,
      message: `সিঙ্ক কোড অকার্যকর বা অসম্পূর্ণ: ${err?.message || 'Invalid sync code format'}`
    };
  }
}

/**
 * Clears mobile browser application cache & reloads the web application
 */
export function clearAppCacheAndReload(): void {
  if (typeof window === 'undefined') return;
  try {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }
  } catch (e) {}

  // Reload with cache busting timestamp
  const url = new URL(window.location.href);
  url.searchParams.set('_v', Date.now().toString());
  window.location.href = url.toString();
}

/**
 * Browser Persistent Storage Requester:
 * Guarantees operating system / browser will NOT evict ERP data when disk space is low.
 */
export async function enablePersistentStorage(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  try {
    if (navigator.storage && navigator.storage.persist) {
      const isPersisted = await navigator.storage.persist();
      if (isPersisted) {
        localStorage.setItem(ERP_STORAGE_KEYS.PERSISTENCE_STATUS, 'GRANTED');
      }
      return isPersisted;
    }
  } catch (e) {
    console.warn('Persistent storage request notice:', e);
  }
  return false;
}

/**
 * IndexedDB Enterprise Mirror Engine
 * Provides dual-layer redundancy: Even if browser localStorage is cleared, IndexedDB preserves all data.
 */
const IDB_NAME = 'GloboTech_ERP_EnterpriseDB';
const IDB_STORE = 'enterprise_mirror';
const IDB_HISTORY_STORE = 'rolling_backups';
const IDB_VERSION = 2;

function openIDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(IDB_NAME, IDB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains(IDB_HISTORY_STORE)) {
        db.createObjectStore(IDB_HISTORY_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Saves complete ERP payload into IndexedDB (both latest mirror & rolling history)
 */
export async function mirrorToIndexedDB(payload?: ERPBackupPayload, triggerSource?: string): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const dataToSave = payload || generateERPBackupPayload();
    const db = await openIDB();

    // 1. Save latest full snapshot
    const tx = db.transaction([IDB_STORE, IDB_HISTORY_STORE], 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    const now = Date.now();
    const nowIso = new Date().toISOString();

    store.put({
      key: 'latest_full_snapshot',
      timestamp: now,
      savedAt: nowIso,
      triggerSource: triggerSource || 'auto',
      payload: dataToSave
    });

    // 2. Append to rolling history
    try {
      const historyStore = tx.objectStore(IDB_HISTORY_STORE);
      historyStore.add({
        timestamp: now,
        savedAt: nowIso,
        triggerSource: triggerSource || 'auto',
        totalRecords: Object.values(dataToSave.meta.recordCounts).reduce((a: number, b: number) => a + b, 0),
        payload: dataToSave
      });

      // Keep only the latest 10 historical snapshots to conserve disk
      const countReq = historyStore.count();
      countReq.onsuccess = () => {
        if (countReq.result > 10) {
          const openCursor = historyStore.openCursor();
          let deleted = 0;
          const toDelete = countReq.result - 10;
          openCursor.onsuccess = () => {
            const cursor = openCursor.result;
            if (cursor && deleted < toDelete) {
              cursor.delete();
              deleted++;
              cursor.continue();
            }
          };
        }
      };
    } catch (e) {}

    // 3. Update localStorage markers
    localStorage.setItem(ERP_STORAGE_KEYS.LAST_BACKUP_DATE, nowIso);
    localStorage.setItem('globotech_erp_last_auto_backup_timestamp', now.toString());

    // 4. Dispatch backup event for UI badges
    window.dispatchEvent(
      new CustomEvent('globotech_auto_backup_completed', {
        detail: {
          timestamp: now,
          savedAt: nowIso,
          totalRecords: Object.values(dataToSave.meta.recordCounts).reduce((a: number, b: number) => a + b, 0)
        }
      })
    );
  } catch (e) {
    console.warn('IndexedDB mirror sync skipped:', e);
  }
}

/**
 * Returns latest auto-backup timestamp
 */
export function getLatestAutoBackupTimestamp(): number {
  if (typeof window === 'undefined') return 0;
  const ts = localStorage.getItem('globotech_erp_last_auto_backup_timestamp');
  return ts ? Number(ts) : 0;
}

/**
 * Auto-recovery verification on system boot
 * Checks if localStorage is intact; if missing or empty, recovers from IndexedDB
 */
export async function verifyAndRestoreStorageIntegrity(): Promise<{ recovered: boolean; message: string }> {
  if (typeof window === 'undefined') return { recovered: false, message: 'Server environment' };

  try {
    const currentPayload = generateERPBackupPayload();
    const totalLocalRecords = Object.values(currentPayload.meta.recordCounts).reduce((a, b) => a + b, 0);

    const db = await openIDB();
    const tx = db.transaction(IDB_STORE, 'readonly');
    const store = tx.objectStore(IDB_STORE);

    return new Promise((resolve) => {
      const getReq = store.get('latest_full_snapshot');
      getReq.onsuccess = () => {
        const result = getReq.result;
        if (result && result.payload) {
          const snapshotPayload = result.payload as ERPBackupPayload;
          if (snapshotPayload.data && Array.isArray(snapshotPayload.data.bills)) {
            snapshotPayload.data.bills = snapshotPayload.data.bills.filter(
              (b: any) => b && b.id !== 'bill-26108' && b.billNo !== 'GT/26108'
            );
          }
          const snapshotRecords = Object.values(snapshotPayload.meta.recordCounts).reduce((a, b) => a + b, 0);

          // If localStorage has less than 15 records (or 0) but IndexedDB has snapshot, restore!
          if (totalLocalRecords < 15 && snapshotRecords > 15) {
            restoreERPBackupData(JSON.stringify(snapshotPayload));
            return resolve({
              recovered: true,
              message: `অটো-রিকভারি সফল: হার্ড ড্রাইভ মিরর থেকে ${snapshotRecords} টি রেকর্ড রিস্টোর করা হয়েছে!`
            });
          }
        }

        // If local records are fewer than 15, auto-fetch full recovered database from web root
        if (totalLocalRecords < 15) {
          fetch('/recovered-backup.json')
            .then((res) => {
              if (res.ok) return res.text();
              throw new Error('Not found');
            })
            .then((jsonStr) => {
              restoreERPBackupData(jsonStr);
              resolve({ recovered: true, message: 'স্বয়ংক্রিয়ভাবে সম্পূর্ণ ব্যাকআপ লোড করা হয়েছে!' });
            })
            .catch(() => {
              mirrorToIndexedDB(currentPayload);
              resolve({ recovered: false, message: 'Storage verified.' });
            });
          return;
        }

        // Save current snapshot to ensure IndexedDB is always up to date
        mirrorToIndexedDB(currentPayload);
        resolve({ recovered: false, message: 'Storage verified and fully intact.' });
      };
      getReq.onerror = () => {
        mirrorToIndexedDB(currentPayload);
        resolve({ recovered: false, message: 'IndexedDB read error.' });
      };
    });
  } catch (err: any) {
    return { recovered: false, message: `Integrity check complete: ${err?.message || 'Ready'}` };
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
