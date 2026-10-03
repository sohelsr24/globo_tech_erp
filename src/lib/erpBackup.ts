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
        const cleanBills = data.bills.filter((b: any) => b && b.id !== 'bill-26108' && b.billNo !== 'GT/26108');
        localStorage.setItem(ERP_STORAGE_KEYS.BILLS, JSON.stringify(cleanBills));
      }
      if (Array.isArray(data.deletedBillIds)) {
        const delSet = new Set<string>(data.deletedBillIds);
        delSet.add('bill-26108');
        delSet.add('GT/26108');
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_BILL_IDS, JSON.stringify(Array.from(delSet)));
      }
      if (Array.isArray(data.customers)) {
        localStorage.setItem(ERP_STORAGE_KEYS.CUSTOMERS, JSON.stringify(data.customers));
      }
      if (Array.isArray(data.deletedCustomerIds)) {
        localStorage.setItem(ERP_STORAGE_KEYS.DELETED_CUSTOMER_IDS, JSON.stringify(data.deletedCustomerIds));
      }
      if (Array.isArray(data.projects)) {
        localStorage.setItem(ERP_STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
      }
      if (Array.isArray(data.clientDirectory)) {
        localStorage.setItem(ERP_STORAGE_KEYS.CLIENT_DIRECTORY, JSON.stringify(data.clientDirectory));
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

      // Mirror directly to IndexedDB as hard copy
      mirrorToIndexedDB(payload);

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
 * IndexedDB Enterprise Mirror Engine
 * Provides dual-layer redundancy: Even if browser localStorage is cleared, IndexedDB preserves all data.
 */
const IDB_NAME = 'GloboTech_ERP_EnterpriseDB';
const IDB_STORE = 'enterprise_mirror';
const IDB_VERSION = 1;

function openIDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(IDB_NAME, IDB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: 'key' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Saves complete ERP payload into IndexedDB
 */
export async function mirrorToIndexedDB(payload?: ERPBackupPayload): Promise<void> {
  try {
    const dataToSave = payload || generateERPBackupPayload();
    const db = await openIDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    store.put({
      key: 'latest_full_snapshot',
      timestamp: Date.now(),
      savedAt: new Date().toISOString(),
      payload: dataToSave
    });
  } catch (e) {
    // Non-fatal fallback
    console.warn('IndexedDB mirror sync skipped:', e);
  }
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
