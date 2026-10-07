const fs = require('fs');
const path = require('path');

const profileDir = 'C:\\Users\\Sohel\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Local Storage\\leveldb';
const files = fs.readdirSync(profileDir);

const keysToExtract = [
  'globotech_erp_purchases',
  'globotech_erp_suppliers',
  'globotech_erp_quotations',
  'globotech_erp_bill_invoices',
  'globotech_erp_customers',
  'globotech_erp_products',
  'globotech_erp_warehouse_stock',
  'globotech_erp_stock_ledger',
  'globotech_erp_projects'
];

const extracted = {};

// Sort files: check .log and newest .ldb first
const sortedFiles = files.filter(f => f.endsWith('.log') || f.endsWith('.ldb')).sort().reverse();

for (const key of keysToExtract) {
  for (const f of sortedFiles) {
    const full = path.join(profileDir, f);
    try {
      const content = fs.readFileSync(full).toString('latin1');
      const keyIdx = content.lastIndexOf(key);
      if (keyIdx !== -1) {
        // Find JSON after key
        const after = content.slice(keyIdx + key.length);
        // Look for '[' or '{'
        const jsonStart = after.search(/[\[\{]/);
        if (jsonStart !== -1 && jsonStart < 50) {
          const raw = after.slice(jsonStart);
          // Try to parse valid JSON by finding matching closing bracket
          const isArr = raw[0] === '[';
          const openChar = isArr ? '[' : '{';
          const closeChar = isArr ? ']' : '}';
          let depth = 0;
          let inStr = false;
          let escape = false;
          let endIdx = -1;
          for (let i = 0; i < raw.length; i++) {
            const ch = raw[i];
            if (escape) { escape = false; continue; }
            if (ch === '\\') { escape = true; continue; }
            if (ch === '"') { inStr = !inStr; continue; }
            if (!inStr) {
              if (ch === openChar) depth++;
              else if (ch === closeChar) {
                depth--;
                if (depth === 0) { endIdx = i + 1; break; }
              }
            }
          }
          if (endIdx !== -1) {
            const candidate = raw.slice(0, endIdx);
            try {
              const parsed = JSON.parse(candidate);
              if (!extracted[key] || (Array.isArray(parsed) && parsed.length >= (extracted[key]?.length || 0))) {
                extracted[key] = parsed;
                console.log(`Successfully extracted ${key} (${Array.isArray(parsed) ? parsed.length : 'obj'} items) from ${f}`);
                break;
              }
            } catch (e) {}
          }
        }
      }
    } catch (e) {}
  }
}

fs.writeFileSync('d:/Globo Tech/ERP/scripts/extracted_user_profile1_data.json', JSON.stringify(extracted, null, 2), 'utf8');
console.log('Saved extracted data to scripts/extracted_user_profile1_data.json');
