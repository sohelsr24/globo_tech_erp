// Autonomous Continuous Enterprise Auto-Backup Daemon
// Automatically intercepts every data update across all ERP modules (Quotations, Bills, Stock, Products, Customers, etc.)
// and writes an instant mirror to IndexedDB and persistent snapshot storage.

import { mirrorToIndexedDB, enablePersistentStorage, generateERPBackupPayload } from '@/lib/erpBackup';

let isDaemonInitialized = false;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let lastCapturedHash = '';

/**
 * Computes a lightweight fast hash/signature of current ERP data count & timestamp
 */
function computeDataSignature(): string {
  if (typeof window === 'undefined') return '';
  try {
    const payload = generateERPBackupPayload();
    const counts = payload.meta.recordCounts;
    return `${counts.quotations}-${counts.bills}-${counts.warehouseStock}-${counts.products}-${counts.customers}-${counts.stockLedger}-${counts.purchases || 0}`;
  } catch (e) {
    return '';
  }
}

/**
 * Schedules a debounced auto-backup
 */
export function triggerAutoBackup(triggerSource: string = 'event'): void {
  if (typeof window === 'undefined') return;

  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    try {
      mirrorToIndexedDB(undefined, triggerSource).catch((err) => {
        console.warn('Auto-backup mirror notice:', err);
      });
      lastCapturedHash = computeDataSignature();
    } catch (e) {}
  }, 400);
}

/**
 * Forces an immediate synchronous auto-backup without debounce delay (for beforeunload or critical saves)
 */
export function forceImmediateBackup(triggerSource: string = 'immediate'): void {
  if (typeof window === 'undefined') return;
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  try {
    mirrorToIndexedDB(undefined, triggerSource).catch(() => {});
    lastCapturedHash = computeDataSignature();
  } catch (e) {}
}

/**
 * Initializes the autonomous background auto-backup daemon.
 * Call once on application mount.
 */
export function startAutoBackupDaemon(): () => void {
  if (typeof window === 'undefined') return () => {};
  if (isDaemonInitialized) {
    return () => {};
  }
  isDaemonInitialized = true;

  // 1. Request Browser Persistent Storage (prevents browser from clearing storage when disk is low)
  enablePersistentStorage().catch(() => {});

  // 2. Initial snapshot on boot
  lastCapturedHash = computeDataSignature();
  triggerAutoBackup('boot_init');

  // 3. Listen to all ERP module update events
  const trackedEvents = [
    'storage',
    'globotech_quotations_updated',
    'globotech_bills_updated',
    'globotech_stock_updated',
    'globotech_products_updated',
    'globotech_customers_updated',
    'globotech_ledger_updated',
    'globotech_categories_updated',
    'globotech_suppliers_updated',
    'globotech_purchases_updated',
    'globotech_projects_updated',
    'globotech_sales_updated',
    'globotech_serials_updated'
  ];

  const handleUpdate = (e: Event) => {
    triggerAutoBackup(e.type);
  };

  trackedEvents.forEach((evtName) => {
    window.addEventListener(evtName, handleUpdate);
  });

  // 4. Lifecycle listeners: Save immediately before tab close, app switch, or page hide
  const handleLifecycleFlush = () => {
    forceImmediateBackup('lifecycle_flush');
  };

  window.addEventListener('beforeunload', handleLifecycleFlush);
  window.addEventListener('pagehide', handleLifecycleFlush);

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      forceImmediateBackup('tab_hidden');
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // 5. Periodic 30-second Heartbeat
  heartbeatTimer = setInterval(() => {
    const currentHash = computeDataSignature();
    if (currentHash && currentHash !== lastCapturedHash) {
      triggerAutoBackup('heartbeat_change');
    }
  }, 30000);

  // Return cleanup function
  return () => {
    isDaemonInitialized = false;
    if (debounceTimer) clearTimeout(debounceTimer);
    if (heartbeatTimer) clearInterval(heartbeatTimer);
    trackedEvents.forEach((evtName) => {
      window.removeEventListener(evtName, handleUpdate);
    });
    window.removeEventListener('beforeunload', handleLifecycleFlush);
    window.removeEventListener('pagehide', handleLifecycleFlush);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}
