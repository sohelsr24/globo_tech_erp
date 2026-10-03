const fs = require('fs');

// 1. Read the recovered data from erp.globotechbd.com
const erpData = JSON.parse(fs.readFileSync('d:/Globo Tech/ERP/scripts/RECOVERED_COMPLETE_ERP_DATA.json', 'utf8'));

// 2. Read localhost IndexedDB log
const lhContent = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/IndexedDB/http_localhost_3000.indexeddb.leveldb/000003.log', 'utf8');

console.log('--- Current erp.globotechbd.com data counts ---');
for (const [k, v] of Object.entries(erpData)) {
  if (Array.isArray(v)) {
    console.log(`  ${k}: ${v.length} items`);
  }
}

// Check Icegold product in localhost log
const icegoldMatch = lhContent.includes('Icegold');
console.log('\nLocalhost has Icegold:', icegoldMatch);

// Let's create the merged database
const merged = { ...erpData };

// Ensure Icegold product is in products
let products = [...(merged.globotech_erp_products || [])];
if (!products.some(p => p.sku === 'ICE60KHAM' || p.name.includes('Icegold'))) {
  products.unshift({
    id: 'PRD-ICEGOLD-01',
    sku: 'ICE60KHAM',
    barcode: '880192837499',
    name: 'Icegold A4 Size Kham',
    category: 'Print Items',
    brand: 'Icegold',
    unit: 'pcs',
    stock: 500,
    minStock: 50,
    purchasePriceCNY: 0,
    currentLandedCost: 45,
    retailPrice: 85,
    wholesalePrice: 75,
    projectPrice: 70,
    dealerPrice: 65,
    isSerialTracked: false
  });
  console.log('Added Icegold to products!');
}
merged.globotech_erp_products = products;

// Ensure Icegold is in warehouseStock
let stock = [...(merged.globotech_erp_warehouse_stock || [])];
if (!stock.some(s => s.sku === 'ICE60KHAM' || s.productName.includes('Icegold'))) {
  stock.unshift({
    id: 'st-icegold-01',
    warehouseName: 'Project Store (Site Depot)',
    productName: 'Icegold A4 Size Kham',
    sku: 'ICE60KHAM',
    available: 500,
    reserved: 0,
    damaged: 0,
    unitLandedCost: 45
  });
  console.log('Added Icegold to warehouseStock! New stock length:', stock.length);
}
merged.globotech_erp_warehouse_stock = stock;

// Ensure ledger has opening entry for Icegold
let ledger = [...(merged.globotech_erp_stock_ledger || [])];
if (!ledger.some(l => l.productName.includes('Icegold'))) {
  ledger.unshift({
    id: 'led-icegold-01',
    timestamp: '2026-10-03 14:00',
    productName: 'Icegold A4 Size Kham',
    warehouseName: 'Project Store (Site Depot)',
    movementType: 'OPENING_STOCK',
    quantityDelta: 500,
    balanceAfter: 500,
    unitLandedCost: 45,
    referenceId: 'INIT-ICEGOLD',
    reasonNotes: 'Opening stock for Icegold A4 Size Kham'
  });
  console.log('Added Icegold to stockLedger! New ledger length:', ledger.length);
}
merged.globotech_erp_stock_ledger = ledger;

// Create the unified official backup payload
const fullPayload = {
  meta: {
    app: 'Globo Tech Enterprise ERP',
    company: 'Globo Tech Bangladesh',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    timestamp: Date.now(),
    recordCounts: {
      quotations: (merged.globotech_erp_quotations || []).length,
      bills: (merged.globotech_erp_bill_invoices || []).length,
      customers: (merged.globotech_erp_customers || []).length,
      projects: (merged.globotech_erp_projects || []).length,
      products: (merged.globotech_erp_products || []).length,
      warehouseStock: (merged.globotech_erp_warehouse_stock || []).length,
      stockLedger: (merged.globotech_erp_stock_ledger || []).length,
      categories: (merged.globotech_erp_categories || []).length,
      sales: (merged.globotech_erp_sales || []).length,
      imports: (merged.globotech_erp_imports || []).length,
      suppliers: (merged.globotech_erp_suppliers || []).length,
      serials: (merged.globotech_erp_serials || []).length
    }
  },
  data: {
    quotations: merged.globotech_erp_quotations || [],
    deletedQuotationIds: merged.globotech_erp_deleted_quotation_ids || [],
    bills: merged.globotech_erp_bill_invoices || [],
    deletedBillIds: merged.globotech_erp_deleted_bill_ids || ['bill-26108', 'GT/26108'],
    customers: merged.globotech_erp_customers || [],
    deletedCustomerIds: merged.globotech_erp_deleted_customer_ids || [],
    projects: merged.globotech_erp_projects || [],
    clientDirectory: merged.globotech_erp_client_directory || [],
    products: merged.globotech_erp_products || [],
    warehouseStock: merged.globotech_erp_warehouse_stock || [],
    stockLedger: merged.globotech_erp_stock_ledger || [],
    categories: merged.globotech_erp_categories || [],
    sales: merged.globotech_erp_sales || [],
    imports: merged.globotech_erp_imports || [],
    suppliers: merged.globotech_erp_suppliers || [],
    serials: merged.globotech_erp_serials || [],
    settings: {
      companyName: 'Globo Tech Bangladesh',
      baseCurrency: 'BDT',
      usdRate: 122,
      cnyRate: 17.5
    }
  }
};

const jsonStr = JSON.stringify(fullPayload, null, 2);
fs.writeFileSync('C:/Users/Sohel/Downloads/GLOBOTECH_RECOVERED_BACKUP.json', jsonStr);
fs.writeFileSync('C:/Users/Sohel/OneDrive/Desktop/GLOBOTECH_RECOVERED_BACKUP.json', jsonStr);
fs.writeFileSync('d:/Globo Tech/ERP/public/recovered-backup.json', jsonStr);
fs.writeFileSync('d:/Globo Tech/ERP/recovered-backup.json', jsonStr);

console.log('\n=== FINAL COMPLETE MASTER BACKUP CREATED ===');
console.log(fullPayload.meta.recordCounts);
