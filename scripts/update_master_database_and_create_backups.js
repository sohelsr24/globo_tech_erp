const fs = require('fs');
const path = require('path');

// 1. Read existing master database payload
const masterPayloadFile = 'd:/Globo Tech/ERP/src/lib/masterDatabasePayload.ts';
const masterPayloadContent = fs.readFileSync(masterPayloadFile, 'utf8');

// Strip 'export const MASTER_DATABASE_PAYLOAD = ' and trailing semicolon
const jsonText = masterPayloadContent
  .replace(/^export\s+const\s+MASTER_DATABASE_PAYLOAD\s*=\s*/, '')
  .replace(/;\s*$/, '');

let masterPayload;
try {
  masterPayload = JSON.parse(jsonText);
} catch (e) {
  console.error('JSON parse error on masterDatabasePayload:', e);
  process.exit(1);
}

// 2. Read purchasesStorage.ts to get initial purchases
const purchasesFile = fs.readFileSync('d:/Globo Tech/ERP/src/lib/purchasesStorage.ts', 'utf8');
const initialPurchasesMatch = purchasesFile.match(/export const INITIAL_PURCHASES: PurchaseBillRecord\[\] = (\[[\s\S]*?\n\];)/);
if (!initialPurchasesMatch) {
  console.error('Could not match INITIAL_PURCHASES');
  process.exit(1);
}
let initialPurchasesCode = initialPurchasesMatch[1].replace(/;$/, '');
const initialPurchases = eval(initialPurchasesCode);

// 3. Inject purchases into master payload
masterPayload.meta.recordCounts.purchases = initialPurchases.length;
masterPayload.data.purchases = initialPurchases;
masterPayload.meta.exportedAt = new Date().toISOString();
masterPayload.meta.timestamp = Date.now();

// 4. Write back to src/lib/masterDatabasePayload.ts
const updatedPayloadTs = `export const MASTER_DATABASE_PAYLOAD = ${JSON.stringify(masterPayload, null, 2)};\n`;
fs.writeFileSync(masterPayloadFile, updatedPayloadTs, 'utf8');
console.log('Successfully updated src/lib/masterDatabasePayload.ts with purchases data!');

// 5. Write to backup destinations
const backupJson = JSON.stringify(masterPayload, null, 2);

const destinations = [
  'd:/Globo Tech/ERP/public/globotech-master-backup.json',
  'd:/Globo Tech/ERP/scripts/GLOBOTECH_ERP_COMPLETE_BACKUP.json',
  'C:/Users/Sohel/Downloads/GLOBOTECH_ERP_COMPLETE_BACKUP_2026.json',
  'C:/Users/Sohel/OneDrive/Desktop/GLOBOTECH_ERP_COMPLETE_BACKUP_2026.json'
];

destinations.forEach((dest) => {
  try {
    const dir = path.dirname(dest);
    if (fs.existsSync(dir)) {
      fs.writeFileSync(dest, backupJson, 'utf8');
      console.log('Saved backup to:', dest);
    }
  } catch (err) {
    console.warn('Could not write to destination:', dest, err.message);
  }
});

console.log('Total record counts in complete backup:');
console.log(masterPayload.meta.recordCounts);
