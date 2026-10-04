const fs = require('fs');

const quote028 = {
  "id": "quote-1791140000001",
  "quotationNumber": "QT-2026-028",
  "version": 1,
  "type": "PRODUCT",
  "date": "2026-10-04",
  "validUntil": "2026-10-18",
  "customerId": "cust-1790614207705",
  "customerName": "Abdul Majid",
  "customerCompany": "Bangladesh Parliament",
  "customerType": "CORPORATE",
  "customerPhone": "",
  "customerEmail": "",
  "customerAddress": "National Parliament House.",
  "customerBin": "004728009-0202",
  "salesperson": "Engr. Sohel Rana",
  "projectName": "Deputy Speaker Indoor flag with SS Stand",
  "projectLocation": "Deputy Speaker Doptor, Bangladesh Parliament",
  "reference": "",
  "currency": "BDT",
  "paymentTerms": "Cash on Delivery (COD)",
  "deliveryTerms": "Within 3 Days",
  "warrantyTerms": "12 Months",
  "vatTaxTerms": "INCLUSIVE of 15% VAT and 10% TAX / AIT.",
  "notes": "",
  "status": "ACCEPTED",
  "stockReserved": false,
  "requiresApproval": false,
  "additionalDiscount": 0,
  "items": [
    {
      "id": "item-qt-2026-028-1",
      "sku": "FLAG-DEP-INDOOR-SS",
      "name": "Deputy Speaker Indoor flag with SS Stand",
      "model": "Deputy Speaker Digital Indoor Flag with SS Stand",
      "brand": "Globo Tech",
      "description": "Deputy Speaker Indoor Flag with SS Stand full supply and installation",
      "category": "Display & Electronics",
      "unit": "pcs",
      "quantity": 1,
      "unitPrice": 74450,
      "totalPrice": 74450,
      "actualLandedCost": 52000,
      "profitMargin": 30.15,
      "warehouse": "Dhaka Central Warehouse",
      "warranty": "12 Months"
    }
  ],
  "approvalReason": "",
  "versionHistory": [],
  "timeline": [
    {
      "date": "2026-10-04",
      "event": "Quotation Created & Accepted",
      "actor": "Engr. Sohel Rana",
      "comments": "Official supply for Bangladesh Parliament"
    }
  ]
};

const quote027 = {
  "id": "quote-1791140000002",
  "quotationNumber": "QT-2026-027",
  "version": 1,
  "type": "PRODUCT",
  "date": "2026-10-04",
  "validUntil": "2026-10-18",
  "customerId": "cust-1790614207705",
  "customerName": "Abdul Majid",
  "customerCompany": "Bangladesh Parliament",
  "customerType": "CORPORATE",
  "customerPhone": "",
  "customerEmail": "",
  "customerAddress": "National Parliament House.",
  "customerBin": "004728009-0202",
  "salesperson": "Engr. Sohel Rana",
  "projectName": "National Flag Indoor with ss stand for Deputy Speaker Doptor",
  "projectLocation": "Deputy Speaker Doptor, Bangladesh Parliament",
  "reference": "",
  "currency": "BDT",
  "paymentTerms": "Cash on Delivery (COD)",
  "deliveryTerms": "Within 3 Days",
  "warrantyTerms": "12 Months",
  "vatTaxTerms": "INCLUSIVE of 15% VAT and 10% TAX / AIT.",
  "notes": "",
  "status": "ACCEPTED",
  "stockReserved": false,
  "requiresApproval": false,
  "additionalDiscount": 0,
  "items": [
    {
      "id": "item-qt-2026-027-1",
      "sku": "FLAG-NAT-INDOOR-SS",
      "name": "National Flag Indoor with ss stand for Deputy Speaker Doptor",
      "model": "National Flag Digital Indoor with SS Stand",
      "brand": "Globo Tech",
      "description": "National Flag Digital Indoor with SS Stand full supply and installation",
      "category": "Display & Electronics",
      "unit": "pcs",
      "quantity": 1,
      "unitPrice": 74450,
      "totalPrice": 74450,
      "actualLandedCost": 52000,
      "profitMargin": 30.15,
      "warehouse": "Dhaka Central Warehouse",
      "warranty": "12 Months"
    }
  ],
  "approvalReason": "",
  "versionHistory": [],
  "timeline": [
    {
      "date": "2026-10-04",
      "event": "Quotation Created & Accepted",
      "actor": "Engr. Sohel Rana",
      "comments": "Official supply for Bangladesh Parliament"
    }
  ]
};

// 1. Update recovered-backup.json and public/recovered-backup.json
const backupFiles = ['recovered-backup.json', 'public/recovered-backup.json'];
for (const bf of backupFiles) {
  if (fs.existsSync(bf)) {
    const backup = JSON.parse(fs.readFileSync(bf, 'utf8'));
    const quotes = backup.data.quotations || [];
    const filtered = quotes.filter(q => q.quotationNumber !== 'QT-2026-028' && q.quotationNumber !== 'QT-2026-027');
    const idx029 = filtered.findIndex(q => q.quotationNumber === 'QT-2026-029');
    if (idx029 !== -1) {
      filtered.splice(idx029 + 1, 0, quote028, quote027);
    } else {
      filtered.unshift(quote028, quote027);
    }
    backup.data.quotations = filtered;
    if (backup.meta && backup.meta.recordCounts) {
      backup.meta.recordCounts.quotations = filtered.length;
    }
    fs.writeFileSync(bf, JSON.stringify(backup, null, 2), 'utf8');
    console.log(`Updated ${bf}, total quotations: ${filtered.length}`);
  }
}

// 2. Update masterDatabasePayload.ts
const payloadPath = 'src/lib/masterDatabasePayload.ts';
if (fs.existsSync(payloadPath)) {
  let fileContent = fs.readFileSync(payloadPath, 'utf8');
  const prefix = 'export const MASTER_DATABASE_PAYLOAD = ';
  let rawJson = fileContent.substring(fileContent.indexOf('{')).trim();
  if (rawJson.endsWith(';')) {
    rawJson = rawJson.slice(0, -1).trim();
  }
  const payload = JSON.parse(rawJson);
  const quotes = payload.data.quotations || [];
  const filtered = quotes.filter(q => q.quotationNumber !== 'QT-2026-028' && q.quotationNumber !== 'QT-2026-027');
  const idx029 = filtered.findIndex(q => q.quotationNumber === 'QT-2026-029');
  if (idx029 !== -1) {
    filtered.splice(idx029 + 1, 0, quote028, quote027);
  } else {
    filtered.unshift(quote028, quote027);
  }
  payload.data.quotations = filtered;
  if (payload.meta && payload.meta.recordCounts) {
    payload.meta.recordCounts.quotations = filtered.length;
  }
  const newContent = prefix + JSON.stringify(payload, null, 2) + ';\n';
  fs.writeFileSync(payloadPath, newContent, 'utf8');
  console.log(`Updated ${payloadPath}, total quotations: ${filtered.length}`);
}
