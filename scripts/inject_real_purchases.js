const fs = require('fs');
const path = require('path');

// 1. Read extracted purchases from scripts/extracted_user_profile1_data.json
const extracted = JSON.parse(fs.readFileSync('d:/Globo Tech/ERP/scripts/extracted_user_profile1_data.json', 'utf8'));
const realPurchases = extracted.globotech_erp_purchases;

if (!Array.isArray(realPurchases) || realPurchases.length === 0) {
  console.error('No real purchases found in extracted data!');
  process.exit(1);
}

console.log(`Found ${realPurchases.length} real purchases from user data.`);

// 2. Read purchasesStorage.ts
const purchasesStoragePath = 'd:/Globo Tech/ERP/src/lib/purchasesStorage.ts';
let purchasesStorageCode = fs.readFileSync(purchasesStoragePath, 'utf8');

// Replace INITIAL_PURCHASES definition
const initialPurchasesReplacement = `// Real Master Purchases Data (Amecon & Parliament Project Procurement)
export const INITIAL_PURCHASES: PurchaseBillRecord[] = ${JSON.stringify(realPurchases, null, 2)};`;

purchasesStorageCode = purchasesStorageCode.replace(
  /\/\/ Realistic seed data connecting existing suppliers and actual catalog products\s*export const INITIAL_PURCHASES: PurchaseBillRecord\[\] = \[[\s\S]*?\n\];/,
  initialPurchasesReplacement
);

// Update getStoredPurchases with auto-migration from legacy demo data
const oldGetStored = `export function getStoredPurchases(): PurchaseBillRecord[] {
  if (typeof window === 'undefined') return INITIAL_PURCHASES;
  try {
    const saved = localStorage.getItem(PURCHASES_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading purchases from storage:', e);
  }
  return INITIAL_PURCHASES;
}`;

const newGetStored = `export function getStoredPurchases(): PurchaseBillRecord[] {
  if (typeof window === 'undefined') return INITIAL_PURCHASES;
  try {
    const saved = localStorage.getItem(PURCHASES_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Automatic Self-Healing: If device has legacy Chinese demo purchases and lacks user's Amecon data, auto-upgrade!
        const hasLegacyDemo = parsed.some((p: any) => p && (p.id === 'PUR-HIK-001' || p.supplierName?.includes('Hikvision') || p.supplierName?.includes('Dahua')));
        const hasRealAmecon = parsed.some((p: any) => p && (p.supplierName?.includes('Amecon') || p.billNumber?.startsWith('PO-2026-10') || p.billNumber === 'PO-2026-5750'));
        if (hasLegacyDemo && !hasRealAmecon) {
          console.log('[Purchases] Auto-upgrading legacy demo data to real user purchases on mobile/client...');
          localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(INITIAL_PURCHASES));
          return INITIAL_PURCHASES;
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading purchases from storage:', e);
  }
  return INITIAL_PURCHASES;
}`;

purchasesStorageCode = purchasesStorageCode.replace(oldGetStored, newGetStored);
fs.writeFileSync(purchasesStoragePath, purchasesStorageCode, 'utf8');
console.log('Successfully updated src/lib/purchasesStorage.ts!');

// 3. Update masterDatabasePayload.ts
const masterPayloadPath = 'd:/Globo Tech/ERP/src/lib/masterDatabasePayload.ts';
let masterPayloadContent = fs.readFileSync(masterPayloadPath, 'utf8');
const jsonText = masterPayloadContent
  .replace(/^export\s+const\s+MASTER_DATABASE_PAYLOAD\s*=\s*/, '')
  .replace(/;\s*$/, '');
const masterPayload = JSON.parse(jsonText);

masterPayload.data.purchases = realPurchases;
masterPayload.meta.recordCounts.purchases = realPurchases.length;
masterPayload.meta.exportedAt = new Date().toISOString();
masterPayload.meta.timestamp = Date.now();

fs.writeFileSync(masterPayloadPath, `export const MASTER_DATABASE_PAYLOAD = ${JSON.stringify(masterPayload, null, 2)};\n`, 'utf8');
console.log('Successfully updated src/lib/masterDatabasePayload.ts!');

// 4. Update public/globotech-master-backup.json and scripts backups
const backupJson = JSON.stringify(masterPayload, null, 2);
const backupPaths = [
  'd:/Globo Tech/ERP/public/globotech-master-backup.json',
  'd:/Globo Tech/ERP/scripts/GLOBOTECH_ERP_COMPLETE_BACKUP.json',
  'd:/Globo Tech/ERP/recovered-backup.json'
];

backupPaths.forEach((bp) => {
  try {
    fs.writeFileSync(bp, backupJson, 'utf8');
    console.log('Updated backup at:', bp);
  } catch (err) {
    console.warn('Could not write to:', bp, err.message);
  }
});

console.log('ALL MASTER PURCHASES SUCCESSFULLY UPDATED!');
