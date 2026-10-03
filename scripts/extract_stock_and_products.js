const fs = require('fs');
const { decompressSnappy } = require('./snappy');

const ldb = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb');

function decompressBlock(offset, size) {
  const raw = ldb.slice(offset, offset + size);
  const compType = ldb[offset + size];
  return compType === 1 ? decompressSnappy(raw) : raw;
}

// Block 38, 39, 40, 41, 42
const blocks = [
  { id: 38, offset: 1704887, size: 2639 },
  { id: 39, offset: 1707531, size: 3009 },
  { id: 40, offset: 1710545, size: 9335 },
  { id: 41, offset: 1719885, size: 3673 },
  { id: 42, offset: 1723563, size: 1569 }
];

let combined = Buffer.alloc(0);
for (const b of blocks) {
  const dec = decompressBlock(b.offset, b.size);
  combined = Buffer.concat([combined, dec]);
}

const allText = combined.toString('utf8');
fs.writeFileSync('d:/Globo Tech/ERP/scripts/all_erp_modules_uncompressed.txt', allText);
console.log('Combined uncompressed text length:', allText.length);

function extractJsonArray(text, keyName) {
  const keyIdx = text.indexOf(keyName);
  if (keyIdx === -1) {
    console.log(keyName, 'not found in combined text');
    return null;
  }
  const openBracket = text.indexOf('[', keyIdx);
  if (openBracket === -1 || openBracket - keyIdx > 300) {
    console.log(keyName, 'bracket not found near key');
    return null;
  }
  let depth = 0;
  let end = -1;
  for (let i = openBracket; i < text.length; i++) {
    if (text[i] === '[') depth++;
    else if (text[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) return null;
  const jsonStr = text.slice(openBracket, end);
  try {
    const parsed = JSON.parse(jsonStr);
    return parsed;
  } catch (e) {
    console.error('Failed to parse JSON for', keyName, e.message);
    return null;
  }
}

const recovered = {};

// 1. Warehouse Stock
const stock = extractJsonArray(allText, 'globotech_erp_warehouse_stock');
if (stock) {
  recovered.warehouseStock = stock;
  console.log('--- WAREHOUSE STOCK ---');
  console.log('Count:', stock.length);
  console.log('Total Available Units:', stock.reduce((s, i) => s + (i.available || 0), 0));
  console.log('Total Valuation:', stock.reduce((s, i) => s + (i.available || 0) * (i.unitLandedCost || 0), 0));
}

// 2. Products Catalog
const products = extractJsonArray(allText, 'globotech_erp_products');
if (products) {
  recovered.products = products;
  console.log('--- PRODUCTS CATALOG ---');
  console.log('Count:', products.length);
}

// 3. Stock Ledger
const ledger = extractJsonArray(allText, 'globotech_erp_stock_ledger');
if (ledger) {
  recovered.stockLedger = ledger;
  console.log('--- STOCK LEDGER ---');
  console.log('Count:', ledger.length);
}

// 4. Quotations
const quotations = extractJsonArray(allText, 'globotech_erp_quotations');
if (quotations) {
  recovered.quotations = quotations;
  console.log('--- QUOTATIONS ---');
  console.log('Count:', quotations.length);
}

// 5. Customers
const customers = extractJsonArray(allText, 'globotech_erp_customers');
if (customers) {
  recovered.customers = customers;
  console.log('--- CUSTOMERS ---');
  console.log('Count:', customers.length);
}

// 6. Categories
const categories = extractJsonArray(allText, 'globotech_erp_categories');
if (categories) {
  recovered.categories = categories;
  console.log('--- CATEGORIES ---');
  console.log('Count:', categories.length);
}

// Also read bills and projects from recovered_database.json if present
if (fs.existsSync('d:/Globo Tech/ERP/scripts/recovered_database.json')) {
  const db = JSON.parse(fs.readFileSync('d:/Globo Tech/ERP/scripts/recovered_database.json', 'utf8'));
  if (db.globotech_erp_bill_invoices) recovered.bills = db.globotech_erp_bill_invoices;
  if (db.globotech_erp_projects) recovered.projects = db.globotech_erp_projects;
  if (db.globotech_erp_sales) recovered.sales = db.globotech_erp_sales;
}

fs.writeFileSync('d:/Globo Tech/ERP/scripts/FULL_RECOVERED_BACKUP.json', JSON.stringify(recovered, null, 2));
console.log('Full recovered backup written to FULL_RECOVERED_BACKUP.json successfully!');
