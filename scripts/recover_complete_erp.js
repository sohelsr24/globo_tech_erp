const fs = require('fs');
const { decompressSnappy } = require('./snappy');

const ldb = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb');

function decompressBlock(offset, size) {
  const raw = ldb.slice(offset, offset + size);
  const compType = ldb[offset + size];
  return compType === 1 ? decompressSnappy(raw) : raw;
}

function readVarint(buf, pos) {
  let val = 0n, shift = 0n;
  while (pos < buf.length) {
    const b = BigInt(buf[pos++]);
    val |= (b & 0x7fn) << shift;
    if ((b & 0x80n) === 0n) break;
    shift += 7n;
  }
  return { val: Number(val), nextPos: pos };
}

// Decode a LevelDB block entries (reconstructs full keys with prefix sharing)
function parseBlockEntries(blockBuf) {
  const numRestarts = blockBuf.readUInt32LE(blockBuf.length - 4);
  const restartOffset = blockBuf.length - (numRestarts + 1) * 4;
  let p = 0;
  let lastKey = Buffer.alloc(0);
  const entries = [];
  
  while (p < restartOffset) {
    const shared = (r = readVarint(blockBuf, p), p = r.nextPos, r.val);
    const nonShared = (r = readVarint(blockBuf, p), p = r.nextPos, r.val);
    const valLen = (r = readVarint(blockBuf, p), p = r.nextPos, r.val);
    
    const key = Buffer.concat([lastKey.slice(0, shared), blockBuf.slice(p, p + nonShared)]);
    p += nonShared;
    lastKey = key;
    
    const valBuf = blockBuf.slice(p, p + valLen);
    p += valLen;
    
    entries.push({ key: key.toString('latin1'), value: valBuf });
  }
  return entries;
}

// Block list for erp.globotechbd.com:
// Block 36: offset 112871, size 8406
// Block 37: offset 121282, size 1583600
// Block 38: offset 1704887, size 2639
// Block 39: offset 1707531, size 3009
// Block 40: offset 1710545, size 9335
// Block 41: offset 1719885, size 3673
// Block 42: offset 1723563, size 1569

const blockList = [
  { id: 36, offset: 112871, size: 8406 },
  { id: 37, offset: 121282, size: 1583600 },
  { id: 38, offset: 1704887, size: 2639 },
  { id: 39, offset: 1707531, size: 3009 },
  { id: 40, offset: 1710545, size: 9335 },
  { id: 41, offset: 1719885, size: 3673 },
  { id: 42, offset: 1723563, size: 1569 }
];

const allRecoveredData = {};

for (const b of blockList) {
  const dec = decompressBlock(b.offset, b.size);
  const entries = parseBlockEntries(dec);
  console.log(`\n=== Block ${b.id} (entries: ${entries.length}) ===`);
  for (const entry of entries) {
    if (entry.key.includes('erp.globotechbd.com')) {
      // Chrome localStorage value has 1-byte format prefix (0x01 = UTF-8 string)
      let valStr = '';
      if (entry.value[0] === 1) {
        valStr = entry.value.slice(1).toString('utf8');
      } else {
        valStr = entry.value.toString('utf8');
      }
      
      // Clean up key name
      const match = entry.key.match(/globotech_erp_[a-z0-9_]+/);
      const cleanKey = match ? match[0] : entry.key;
      
      console.log(`  Key: ${cleanKey} | Val bytes: ${entry.value.length}`);
      try {
        const parsed = JSON.parse(valStr);
        allRecoveredData[cleanKey] = parsed;
        if (Array.isArray(parsed)) {
          console.log(`    -> Parsed Array with ${parsed.length} items`);
        } else if (typeof parsed === 'object') {
          console.log(`    -> Parsed Object with keys: ${Object.keys(parsed).join(', ')}`);
        }
      } catch (e) {
        console.log(`    -> String value: ${valStr.slice(0, 100)}`);
        allRecoveredData[cleanKey] = valStr;
      }
    }
  }
}

fs.writeFileSync('d:/Globo Tech/ERP/scripts/RECOVERED_COMPLETE_ERP_DATA.json', JSON.stringify(allRecoveredData, null, 2));
console.log('\n=============================================');
console.log('SUCCESS! ALL RECOVERED DATA WRITTEN TO:');
console.log('d:/Globo Tech/ERP/scripts/RECOVERED_COMPLETE_ERP_DATA.json');
console.log('=============================================');
