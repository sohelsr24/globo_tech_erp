const fs = require('fs');

const master = JSON.parse(fs.readFileSync('d:/Globo Tech/ERP/public/recovered-backup.json', 'utf8'));

const content = `// Master Production Default Database
// Automatically populated from complete ERP snapshot

export const MASTER_INITIAL_PRODUCTS = ${JSON.stringify(master.data.products, null, 2)};

export const MASTER_INITIAL_WAREHOUSE_STOCK = ${JSON.stringify(master.data.warehouseStock, null, 2)};

export const MASTER_INITIAL_STOCK_LEDGER = ${JSON.stringify(master.data.stockLedger, null, 2)};

export const MASTER_INITIAL_CATEGORIES = ${JSON.stringify(master.data.categories, null, 2)};
`;

fs.writeFileSync('d:/Globo Tech/ERP/src/lib/initialMasterData.ts', content);
console.log('src/lib/initialMasterData.ts created successfully!');
