const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('d:/Globo Tech/ERP/scripts/RECOVERED_COMPLETE_ERP_DATA.json', 'utf8'));

const payload = {
  meta: {
    app: 'Globo Tech Enterprise ERP',
    company: 'Globo Tech Bangladesh',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    timestamp: Date.now(),
    recordCounts: {
      quotations: (raw.globotech_erp_quotations || []).length,
      bills: (raw.globotech_erp_bill_invoices || []).length,
      customers: (raw.globotech_erp_customers || []).length,
      projects: (raw.globotech_erp_projects || []).length,
      products: (raw.globotech_erp_products || []).length,
      warehouseStock: (raw.globotech_erp_warehouse_stock || []).length,
      stockLedger: (raw.globotech_erp_stock_ledger || []).length,
      categories: (raw.globotech_erp_categories || []).length,
      sales: (raw.globotech_erp_sales || []).length,
      imports: (raw.globotech_erp_imports || []).length,
      suppliers: (raw.globotech_erp_suppliers || []).length,
      serials: (raw.globotech_erp_serials || []).length
    }
  },
  data: {
    quotations: raw.globotech_erp_quotations || [],
    deletedQuotationIds: raw.globotech_erp_deleted_quotation_ids || [],
    bills: raw.globotech_erp_bill_invoices || [],
    deletedBillIds: raw.globotech_erp_deleted_bill_ids || ['bill-26108', 'GT/26108'],
    customers: raw.globotech_erp_customers || [],
    deletedCustomerIds: raw.globotech_erp_deleted_customer_ids || [],
    projects: raw.globotech_erp_projects || [],
    clientDirectory: raw.globotech_erp_client_directory || [],
    products: raw.globotech_erp_products || [],
    warehouseStock: raw.globotech_erp_warehouse_stock || [],
    stockLedger: raw.globotech_erp_stock_ledger || [],
    categories: raw.globotech_erp_categories || [],
    sales: raw.globotech_erp_sales || [],
    imports: raw.globotech_erp_imports || [],
    suppliers: raw.globotech_erp_suppliers || [],
    serials: raw.globotech_erp_serials || [],
    settings: {
      companyName: 'Globo Tech Bangladesh',
      baseCurrency: 'BDT',
      usdRate: 122,
      cnyRate: 17.5
    }
  }
};

// Also copy to Downloads folder so user can easily pick it from file dialog!
const downloadPath = 'C:/Users/Sohel/Downloads/GLOBOTECH_RECOVERED_BACKUP.json';
const desktopPath = 'C:/Users/Sohel/OneDrive/Desktop/GLOBOTECH_RECOVERED_BACKUP.json';
const projectPath = 'd:/Globo Tech/ERP/public/recovered-backup.json';

const jsonStr = JSON.stringify(payload, null, 2);
fs.writeFileSync(downloadPath, jsonStr);
fs.writeFileSync(desktopPath, jsonStr);
fs.writeFileSync(projectPath, jsonStr);
fs.writeFileSync('d:/Globo Tech/ERP/scripts/official_backup_payload.json', jsonStr);

console.log('Official backup created successfully!');
console.log('Saved to:');
console.log('1. ', downloadPath);
console.log('2. ', desktopPath);
console.log('3. ', projectPath);
console.log('Summary of recovered records:');
console.log(payload.meta.recordCounts);
