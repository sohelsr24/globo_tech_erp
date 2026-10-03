const fs = require('fs');
const { decompressSnappy } = require('./snappy');

const ldb = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb');

console.log('Scanning 003222.ldb for Snappy blocks...');

// In LevelDB SSTables, each data block ends with:
// 1 byte compression type (0x01 = Snappy)
// 4 bytes CRC32
// And typically block size is 2KB to 32KB.
// Let's scan around the known occurrences of BOOKPMT (1707669 and 1723742).

for (const targetOffset of [1707669, 1723742]) {
  console.log(`\n--- Searching around target offset ${targetOffset} ---`);
  // Try different potential block start positions before targetOffset
  for (let back = 50; back <= 8000; back++) {
    const start = targetOffset - back;
    if (start < 0) continue;
    try {
      const decompressed = decompressSnappy(ldb.slice(start, targetOffset + 4000));
      const text = decompressed.toString('utf8');
      if (text.includes('BOOKPMT') && text.includes('available')) {
        console.log(`SUCCESS at start = ${start} (back = ${back})! Decompressed length: ${decompressed.length}`);
        fs.writeFileSync(`d:/Globo Tech/ERP/scripts/decompressed_stock_${start}.txt`, text);
        console.log('Snippet:', text.slice(0, 500));
        break;
      }
    } catch (e) {
      // not a valid snappy start
    }
  }
}
