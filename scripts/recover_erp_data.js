const fs = require('fs');
const path = require('path');

const ldbPath = 'C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb';
const logPath = 'C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003220.log';

console.log('Reading leveldb files...');
const ldbData = fs.readFileSync(ldbPath);
const logData = fs.readFileSync(logPath);

console.log('LDB size:', ldbData.length, 'LOG size:', logData.length);

// Search for JSON array around a key pattern
function findJsonArray(buffer, startPattern, maxLen = 2000000) {
  const patternBuf = Buffer.from(startPattern, 'utf8');
  let idx = 0;
  const results = [];
  while ((idx = buffer.indexOf(patternBuf, idx)) !== -1) {
    // Look backwards or forwards for '['
    const bracketIdx = buffer.indexOf('[', Math.max(0, idx - 100));
    if (bracketIdx !== -1 && bracketIdx <= idx + patternBuf.length) {
      // Find matching ']'
      let depth = 0;
      let inString = false;
      let escape = false;
      let endIdx = -1;
      for (let i = bracketIdx; i < Math.min(buffer.length, bracketIdx + maxLen); i++) {
        const char = String.fromCharCode(buffer[i]);
        if (escape) {
          escape = false;
          continue;
        }
        if (char === '\\') {
          escape = true;
          continue;
        }
        if (char === '"') {
          inString = !inString;
          continue;
        }
        if (!inString) {
          if (char === '[') depth++;
          else if (char === ']') {
            depth--;
            if (depth === 0) {
              endIdx = i + 1;
              break;
            }
          }
        }
      }
      if (endIdx !== -1) {
        const jsonStr = buffer.slice(bracketIdx, endIdx).toString('utf8');
        try {
          const parsed = JSON.parse(jsonStr);
          results.push({ pos: bracketIdx, length: jsonStr.length, parsed });
        } catch (e) {
          // invalid JSON (maybe Snappy compressed piece)
        }
      }
    }
    idx += patternBuf.length;
  }
  return results;
}

const stockResults = findJsonArray(ldbData, '"warehouseName"');
console.log('Found warehouseStock candidates:', stockResults.length);
stockResults.forEach((r, i) => {
  console.log(`Candidate ${i}: length=${r.length}, items=${Array.isArray(r.parsed) ? r.parsed.length : 'not array'}`);
  if (Array.isArray(r.parsed) && r.parsed.length > 0) {
    console.log('Sample item:', r.parsed[0]);
  }
});

const productResults = findJsonArray(ldbData, '"purchasePriceCNY"');
console.log('Found product candidates:', productResults.length);
productResults.forEach((r, i) => {
  console.log(`Product candidate ${i}: length=${r.length}, items=${Array.isArray(r.parsed) ? r.parsed.length : 'not array'}`);
  if (Array.isArray(r.parsed) && r.parsed.length > 0) {
    console.log('Sample product:', r.parsed[0]);
  }
});
