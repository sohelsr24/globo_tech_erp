'use client';

/**
 * Globo Tech ERP - High-Speed Automatic Cloud Data Synchronization Engine
 * Automatically synchronizes master database between PC and Mobile devices in real time.
 * Uses Hostinger Server Cloud Sync API (/api/sync.php) with Intelligent Bidirectional Union Merge.
 */

import {
  generateERPBackupPayload,
  restoreERPBackupData,
  ERPBackupPayload
} from '@/lib/erpBackup';

export interface AutoSyncStatus {
  isSyncing: boolean;
  lastSyncedAt: number | null;
  serverTimestamp: number | null;
  statusText: string;
  isOnline: boolean;
  error?: string | null;
  lastAction?: 'PUSH' | 'PULL' | 'IDLE';
}

const STORAGE_KEY_LAST_SYNCED = 'globotech_erp_cloud_last_synced_timestamp';
const STORAGE_KEY_LOCAL_MODIFIED = 'globotech_erp_local_last_modified_timestamp';
const STORAGE_KEY_HAS_UNSYNCED = 'globotech_erp_has_unsynced_local_changes';

export function getSyncApiEndpoint(): string {
  if (typeof window === 'undefined') return 'https://erp.globotechbd.com/api/sync.php';
  if (window.location.hostname === 'erp.globotechbd.com' || window.location.hostname === 'www.erp.globotechbd.com') {
    return '/api/sync.php';
  }
  return 'https://erp.globotechbd.com/api/sync.php';
}

let syncDebounceTimer: NodeJS.Timeout | null = null;
let backgroundIntervalId: NodeJS.Timeout | null = null;
let isSyncInProgress = false;
let isRestoringFromSync = false;
const listeners = new Set<(status: AutoSyncStatus) => void>();

let currentStatus: AutoSyncStatus = {
  isSyncing: false,
  lastSyncedAt: null,
  serverTimestamp: null,
  statusText: 'প্রস্তুত (Ready)',
  isOnline: true,
  error: null,
  lastAction: 'IDLE'
};

function notifyListeners() {
  listeners.forEach((listener) => {
    try {
      listener({ ...currentStatus });
    } catch (e) {
      console.warn('Sync status listener error:', e);
    }
  });
}

function updateStatus(patch: Partial<AutoSyncStatus>) {
  currentStatus = { ...currentStatus, ...patch };
  notifyListeners();
}

/**
 * Dispatches refresh events to all ERP modules so UI components update immediately
 */
function dispatchAllModuleRefreshEvents(timestamp: number) {
  if (typeof window === 'undefined') return;
  try {
    window.dispatchEvent(new CustomEvent('globotech:cloud_data_synced', { detail: { timestamp } }));
    window.dispatchEvent(new CustomEvent('globotech_purchases_updated'));
    window.dispatchEvent(new CustomEvent('globotech_suppliers_updated'));
    window.dispatchEvent(new CustomEvent('globotech_quotations_updated'));
    window.dispatchEvent(new CustomEvent('globotech_bills_updated'));
    window.dispatchEvent(new CustomEvent('globotech_stock_updated'));
    window.dispatchEvent(new CustomEvent('globotech_backup_restored'));
  } catch (e) {
    console.warn('Dispatch module events error:', e);
  }
}

/**
 * Detects device category (Mobile vs PC)
 */
export function getDeviceCategory(): string {
  if (typeof window === 'undefined') return 'Server';
  const ua = navigator.userAgent || '';
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return 'Mobile';
  }
  return 'PC';
}

/**
 * Call whenever any module saves, updates, or deletes data locally.
 * Marks unsynced state and schedules an automatic background push to the cloud within 300ms.
 */
export function markLocalDataChanged(): void {
  if (typeof window === 'undefined' || isRestoringFromSync) return;
  const now = Date.now();
  localStorage.setItem(STORAGE_KEY_HAS_UNSYNCED, 'true');
  localStorage.setItem(STORAGE_KEY_LOCAL_MODIFIED, now.toString());
  updateStatus({ statusText: 'লোকাল ডাটা সেভ হয়েছে, ক্লাউডে সিঙ্ক হচ্ছে...' });

  if (syncDebounceTimer) {
    clearTimeout(syncDebounceTimer);
  }

  syncDebounceTimer = setTimeout(() => {
    pushToCloud().catch((err) => {
      console.warn('Debounced auto-push failed:', err);
    });
  }, 300);
}

/**
 * Pushes the full master database from current device to Cloud Server
 * Server performs Non-Destructive Union Merge, ensuring PC and Mobile data combine without loss.
 */
export async function pushToCloud(): Promise<{ success: boolean; message: string; timestamp?: number }> {
  if (typeof window === 'undefined') return { success: false, message: 'SSR' };
  if (isSyncInProgress) return { success: false, message: 'Sync already in progress' };

  isSyncInProgress = true;
  updateStatus({ isSyncing: true, statusText: 'ক্লাউড সার্ভারে ডাটা সিঙ্ক হচ্ছে...', lastAction: 'PUSH' });

  try {
    const payload: ERPBackupPayload = generateERPBackupPayload();
    const device = getDeviceCategory();
    const endpoint = getSyncApiEndpoint();

    const response = await fetch(`${endpoint}?action=push&device=${encodeURIComponent(device)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const result = await response.json();
    if (result.status === 'ok') {
      const serverTime = Number(result.timestamp) || Date.now();
      localStorage.setItem(STORAGE_KEY_LAST_SYNCED, serverTime.toString());
      localStorage.setItem(STORAGE_KEY_LOCAL_MODIFIED, serverTime.toString());
      localStorage.removeItem(STORAGE_KEY_HAS_UNSYNCED);

      // If server returned merged data, safely update local store so incoming records from other devices are reflected
      if (result.mergedPayload && result.mergedPayload.data) {
        try {
          isRestoringFromSync = true;
          restoreERPBackupData(JSON.stringify(result.mergedPayload), { mode: 'merge' });
        } catch (e) {
          console.warn('Local merge after push error:', e);
        } finally {
          isRestoringFromSync = false;
        }
      }

      updateStatus({
        isSyncing: false,
        lastSyncedAt: serverTime,
        serverTimestamp: serverTime,
        statusText: '🟢 ক্লাউডে রিয়েল-টাইম সিঙ্ক সম্পন্ন!',
        error: null,
        lastAction: 'PUSH'
      });

      dispatchAllModuleRefreshEvents(serverTime);

      return { success: true, message: 'Cloud sync successful', timestamp: serverTime };
    } else {
      throw new Error(result.message || 'Push failed');
    }
  } catch (err: any) {
    console.warn('Cloud Push Error:', err);
    updateStatus({
      isSyncing: false,
      statusText: 'ক্লাউড সিঙ্কে সমস্যা হয়েছে',
      error: err?.message || 'Network error',
      lastAction: 'PUSH'
    });
    return { success: false, message: err?.message || 'Network error' };
  } finally {
    isSyncInProgress = false;
  }
}

/**
 * Pulls the latest master database from Cloud Server and updates local device storage via Union Merge
 */
export async function pullFromCloud(options: { silent?: boolean; expectedTimestamp?: number } = {}): Promise<{ success: boolean; message: string }> {
  if (typeof window === 'undefined') return { success: false, message: 'SSR' };
  if (isSyncInProgress) return { success: false, message: 'Sync already in progress' };

  isSyncInProgress = true;
  if (!options.silent) {
    updateStatus({ isSyncing: true, statusText: 'ক্লাউড থেকে নতুন ডাটা নামানো হচ্ছে...', lastAction: 'PULL' });
  }

  try {
    const endpoint = getSyncApiEndpoint();
    const response = await fetch(`${endpoint}?action=pull&_t=${Date.now()}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const jsonText = await response.text();
    if (!jsonText || jsonText.trim().length === 0) {
      throw new Error('Server returned empty data');
    }

    // Check for empty status response
    try {
      const parsedCheck = JSON.parse(jsonText);
      if (parsedCheck.status === 'empty') {
        updateStatus({ isSyncing: false, statusText: 'ক্লাউডে এখনো কোনো ডাটা নেই' });
        return { success: false, message: parsedCheck.message };
      }
    } catch (e) {}

    // Restore to local storage and IndexedDB with safe Union Merge
    let restoreResult: { success: boolean; message: string } = { success: false, message: 'Failed' };
    try {
      isRestoringFromSync = true;
      restoreResult = restoreERPBackupData(jsonText, { mode: 'merge' });
    } finally {
      isRestoringFromSync = false;
    }

    if (restoreResult.success) {
      let serverTimestamp = options.expectedTimestamp || Date.now();
      try {
        const payload = JSON.parse(jsonText);
        serverTimestamp = Number(payload.meta?.timestamp) || options.expectedTimestamp || serverTimestamp;
      } catch (e) {}

      localStorage.setItem(STORAGE_KEY_LAST_SYNCED, serverTimestamp.toString());
      localStorage.setItem(STORAGE_KEY_LOCAL_MODIFIED, serverTimestamp.toString());

      updateStatus({
        isSyncing: false,
        lastSyncedAt: serverTimestamp,
        serverTimestamp: serverTimestamp,
        statusText: '🎉 মোবাইল ও পিসির ডাটা লাইভ আপডেট হয়েছে!',
        error: null,
        lastAction: 'PULL'
      });

      dispatchAllModuleRefreshEvents(serverTimestamp);

      return { success: true, message: 'Data restored successfully' };
    } else {
      throw new Error(restoreResult.message);
    }
  } catch (err: any) {
    console.warn('Cloud Pull Error:', err);
    updateStatus({
      isSyncing: false,
      statusText: 'ক্লাউড থেকে ডাটা নামাতে সমস্যা হয়েছে',
      error: err?.message || 'Network error',
      lastAction: 'PULL'
    });
    return { success: false, message: err?.message || 'Network error' };
  } finally {
    isSyncInProgress = false;
  }
}

/**
 * Checks server for updates and performs automatic bidirectional sync
 */
export async function checkAndAutoSync(): Promise<void> {
  if (typeof window === 'undefined' || isSyncInProgress) return;

  try {
    const endpoint = getSyncApiEndpoint();
    const res = await fetch(`${endpoint}?action=check&_t=${Date.now()}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    if (!res.ok) return;
    const meta = await res.json();
    if (meta.status !== 'ok') return;

    const serverTs = Number(meta.timestamp) || 0;
    const localLastSynced = Number(localStorage.getItem(STORAGE_KEY_LAST_SYNCED)) || 0;
    const hasUnsynced = localStorage.getItem(STORAGE_KEY_HAS_UNSYNCED) === 'true';

    // 1. If this device has unsynced local modifications, push to cloud with Union Merge!
    if (hasUnsynced) {
      await pushToCloud();
      return;
    }

    // 2. If this device has never synced, push local state to ensure server merges it!
    if (localLastSynced === 0) {
      await pushToCloud();
      return;
    }

    // 3. If server has a newer timestamp than local last sync, pull and union-merge!
    if (serverTs > 0 && serverTs > localLastSynced) {
      await pullFromCloud({ silent: true, expectedTimestamp: serverTs });
      return;
    }

    // 4. If synchronized
    if (serverTs > 0) {
      updateStatus({
        lastSyncedAt: serverTs,
        serverTimestamp: serverTs,
        statusText: '🟢 ক্লাউড সিঙ্ক সক্রিয় (সব ডাটা আপ-টু-ডেট)'
      });
    }
  } catch (err) {
    // Silent fail in background checking
  }
}

/**
 * Force manual immediate bidirectional sync (called on button click)
 */
export async function forceSyncNow(): Promise<{ success: boolean; message: string }> {
  // Push local changes first and adopt server-merged master state
  const pushRes = await pushToCloud();
  if (pushRes.success) return pushRes;
  return await pullFromCloud({ silent: false });
}

// Hook into localStorage.setItem so ANY module writing data triggers automatic cloud sync
let isLocalStoragePatched = false;
function patchLocalStorageForAutoSync() {
  if (typeof window === 'undefined' || isLocalStoragePatched) return;
  try {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key: string, value: string) {
      originalSetItem.apply(this, [key, value]);
      if (isRestoringFromSync) return;
      if (
        key &&
        key.startsWith('globotech_erp_') &&
        !key.includes('cloud_last_synced') &&
        !key.includes('local_last_modified') &&
        !key.includes('has_unsynced') &&
        !key.includes('auto_snapshot') &&
        !key.includes('persistence_status')
      ) {
        markLocalDataChanged();
      }
    };
    isLocalStoragePatched = true;
  } catch (e) {
    console.warn('Failed to patch localStorage for auto sync:', e);
  }
}

/**
 * Initializes Automatic Background Sync on application startup.
 * Sets up listeners for window focus, tab visibility, and periodic 5-second polling.
 */
export function startAutoSyncEngine(onStatusChange?: (status: AutoSyncStatus) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  patchLocalStorageForAutoSync();

  if (onStatusChange) {
    listeners.add(onStatusChange);
    onStatusChange({ ...currentStatus });
  }

  // Hook into module update events
  const handleDataChangedEvent = () => {
    markLocalDataChanged();
  };
  window.addEventListener('globotech_purchases_updated', handleDataChangedEvent);
  window.addEventListener('globotech_suppliers_updated', handleDataChangedEvent);
  window.addEventListener('globotech_quotations_updated', handleDataChangedEvent);
  window.addEventListener('globotech_bills_updated', handleDataChangedEvent);
  window.addEventListener('globotech_stock_updated', handleDataChangedEvent);

  // 1. Initial check immediately on load
  setTimeout(() => {
    checkAndAutoSync();
  }, 800);

  // 2. Periodic background check every 5 seconds (ultra-lightweight ~60 bytes ping)
  if (backgroundIntervalId) {
    clearInterval(backgroundIntervalId);
  }
  backgroundIntervalId = setInterval(() => {
    checkAndAutoSync();
  }, 5000);

  // 3. Check immediately when user switches tabs or unlocks phone screen
  const handleVisibilityOrFocus = () => {
    if (document.visibilityState === 'visible') {
      checkAndAutoSync();
    }
  };

  window.addEventListener('focus', handleVisibilityOrFocus);
  document.addEventListener('visibilitychange', handleVisibilityOrFocus);

  // 4. Hook into window online/offline events
  const handleOnline = () => {
    updateStatus({ isOnline: true, statusText: '🟢 ইন্টারনেট সচল, সিঙ্ক হচ্ছে...' });
    checkAndAutoSync();
  };
  const handleOffline = () => {
    updateStatus({ isOnline: false, statusText: '⚠️ অফলাইন (ইন্টারনেট নেই)' });
  };
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    if (onStatusChange) listeners.delete(onStatusChange);
    if (backgroundIntervalId) clearInterval(backgroundIntervalId);
    window.removeEventListener('focus', handleVisibilityOrFocus);
    document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
    window.removeEventListener('globotech_purchases_updated', handleDataChangedEvent);
    window.removeEventListener('globotech_suppliers_updated', handleDataChangedEvent);
    window.removeEventListener('globotech_quotations_updated', handleDataChangedEvent);
    window.removeEventListener('globotech_bills_updated', handleDataChangedEvent);
    window.removeEventListener('globotech_stock_updated', handleDataChangedEvent);
  };
}

export function getCurrentAutoSyncStatus(): AutoSyncStatus {
  return { ...currentStatus };
}
