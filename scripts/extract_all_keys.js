const fs = require('fs');

const text = fs.readFileSync('d:/Globo Tech/ERP/scripts/erp_decompressed_all.txt', 'utf8');

const keysToFind = [
  'globotech_erp_products',
  'globotech_erp_warehouse_stock',
  'globotech_erp_stock_ledger',
  'globotech_erp_quotations',
  'globotech_erp_bill_invoices',
  'globotech_erp_customers',
  'globotech_erp_projects',
  'globotech_erp_categories',
  'globotech_erp_sales',
  'globotech_erp_imports',
  'globotech_erp_suppliers',
  'globotech_erp_serials',
  'globotech_erp_settings',
  'globotech_erp_client_directory'
];

console.log('Searching extracted text for keys...');
const extracted = {};

for (const key of keysToFind) {
  let idx = 0;
  let matches = [];
  while ((idx = text.indexOf(key, idx)) !== -1) {
    // Search forward for the value
    // In LevelDB data block, value follows the key entry
    // Look for '[' or '{'
    const openBracket = text.indexOf('[', idx);
    const openBrace = text.indexOf('{', idx);
    let startChar = -1;
    let endCharType = '';
    if (openBracket !== -1 && (openBrace === -1 || openBracket < openBrace)) {
      startChar = openBracket;
      endCharType = ']';
    } else if (openBrace !== -1) {
      startChar = openBrace;
      endCharType = '}';
    }
    
    if (startChar !== -1 && startChar - idx < 200) {
      // Find matching bracket
      let depth = 0;
      let inString = false;
      let escape = false;
      let endIdx = -1;
      const openChar = text[startChar];
      for (let i = startChar; i < text.length; i++) {
        const c = text[i];
        if (escape) {
          escape = false;
          continue;
        }
        if (c === '\\') {
          escape = true;
          continue;
        }
        if (c === '"') {
          inString = !inString;
          continue;
        }
        if (!inString) {
          if (c === openChar) depth++;
          else if (c === endCharType) {
            depth--;
            if (depth === 0) {
              endIdx = i + 1;
              break;
            }
          }
        }
      }
      
      if (endIdx !== -1) {
        const jsonStr = text.slice(startChar, endIdx);
        try {
          const parsed = JSON.parse(jsonStr);
          matches.push(parsed);
        } catch (e) {
          // parse error
        }
      }
    }
    idx += key.length;
  }
  
  if (matches.length > 0) {
    // Pick the longest match
    matches.sort((a, b) => JSON.stringify(b).length - JSON.stringify(a).length);
    extracted[key] = matches[0];
    console.log(`Key ${key}: Found ${matches.length} matches. Largest length: ${Array.isArray(matches[0]) ? matches[0].length + ' items' : typeof matches[0]}`);
  } else {
    console.log(`Key ${key}: NOT FOUND in extracted text directly.`);
  }
}

fs.writeFileSync('d:/Globo Tech/ERP/scripts/recovered_database.json', JSON.stringify(extracted, null, 2));
console.log('Saved recovered_database.json successfully!');
