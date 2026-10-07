const fs = require('fs');
const path = require('path');

const paths = [
  'C:\\Users\\Sohel\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb',
  'C:\\Users\\Sohel\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Local Storage\\leveldb'
];

for (const p of paths) {
  if (!fs.existsSync(p)) continue;
  console.log('Checking:', p);
  const files = fs.readdirSync(p);
  for (const f of files) {
    if (f.endsWith('.ldb') || f.endsWith('.log')) {
      const full = path.join(p, f);
      try {
        const buf = fs.readFileSync(full);
        const str = buf.toString('latin1');
        const idx = str.indexOf('globotech_erp_purchases');
        if (idx !== -1) {
          console.log('Found globotech_erp_purchases in:', full, 'at index', idx);
          // Extract snippet around it
          const start = Math.max(0, idx - 50);
          const end = Math.min(str.length, idx + 2000);
          console.log('SNIPPET:', JSON.stringify(str.slice(start, end).replace(/[^\x20-\x7E]/g, ' ')));
        }
      } catch (e) {
        // file locked or error
      }
    }
  }
}
