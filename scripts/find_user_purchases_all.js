const fs = require('fs');
const path = require('path');

function searchDir(baseDir) {
  if (!fs.existsSync(baseDir)) return;
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'leveldb') {
        const files = fs.readdirSync(full);
        for (const f of files) {
          if (f.endsWith('.ldb') || f.endsWith('.log')) {
            const fpath = path.join(full, f);
            try {
              const content = fs.readFileSync(fpath).toString('latin1');
              if (content.includes('globotech_erp_purchases') || content.includes('PO-') || content.includes('PUR-')) {
                console.log('Match in:', fpath);
                const matches = content.match(/\[\{[^{}]*"billNumber"[^{}]*\}\]/g);
                if (matches) {
                  console.log('Matches:', matches.length);
                }
                const idx = content.indexOf('globotech_erp_purchases');
                if (idx !== -1) {
                  console.log('Found key globotech_erp_purchases in:', fpath);
                  console.log(content.slice(idx, idx + 800).replace(/[^\x20-\x7E]/g, ' '));
                }
              }
            } catch (e) {}
          }
        }
      } else if (!entry.name.startsWith('.')) {
        try {
          searchDir(full);
        } catch (e) {}
      }
    }
  }
}

console.log('Searching Chrome...');
searchDir('C:\\Users\\Sohel\\AppData\\Local\\Google\\Chrome\\User Data');
console.log('Searching Edge...');
searchDir('C:\\Users\\Sohel\\AppData\\Local\\Microsoft\\Edge\\User Data');
console.log('Done.');
