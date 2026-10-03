const fs = require('fs');
const { decompressSnappy } = require('./snappy');

const ldb = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb');

// Block 42: offset 1723563, size 1569
const blkOffset = 1723563;
const blkSize = 1569;
const raw = ldb.slice(blkOffset, blkOffset + blkSize);
const compType = ldb[blkOffset + blkSize];
console.log('Block 42 compression type:', compType); // 1 = snappy

const uncompressed = compType === 1 ? decompressSnappy(raw) : raw;
console.log('Block 42 uncompressed size:', uncompressed.length);
fs.writeFileSync('d:/Globo Tech/ERP/scripts/block42_uncompressed.bin', uncompressed);
const text = uncompressed.toString('utf8');
console.log('Block 42 text length:', text.length);
console.log('Block 42 snippet:');
console.log(text.slice(0, 1000));
