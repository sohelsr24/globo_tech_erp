const fs = require('fs');
const { decompressSnappy } = require('./snappy');

const ldb = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb');

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

const footer = ldb.slice(ldb.length - 48);
let p = 0, r;
const metaHandle = {
  offset: (r = readVarint(footer, p), p = r.nextPos, r.val),
  size: (r = readVarint(footer, p), p = r.nextPos, r.val)
};
const indexHandle = {
  offset: (r = readVarint(footer, p), p = r.nextPos, r.val),
  size: (r = readVarint(footer, p), p = r.nextPos, r.val)
};

let decompressedIndex = ldb.slice(indexHandle.offset, indexHandle.offset + indexHandle.size);
if (ldb[indexHandle.offset + indexHandle.size] === 1) {
  decompressedIndex = decompressSnappy(decompressedIndex);
}

const numRestarts = decompressedIndex.readUInt32LE(decompressedIndex.length - 4);
let idxPos = 0, lastKey = Buffer.alloc(0);
const allBlocks = [];

while (idxPos < decompressedIndex.length - (numRestarts + 1) * 4) {
  const shared = (r = readVarint(decompressedIndex, idxPos), idxPos = r.nextPos, r.val);
  const nonShared = (r = readVarint(decompressedIndex, idxPos), idxPos = r.nextPos, r.val);
  const valLen = (r = readVarint(decompressedIndex, idxPos), idxPos = r.nextPos, r.val);
  const key = Buffer.concat([lastKey.slice(0, shared), decompressedIndex.slice(idxPos, idxPos + nonShared)]);
  idxPos += nonShared;
  lastKey = key;
  const valBuf = decompressedIndex.slice(idxPos, idxPos + valLen);
  idxPos += valLen;
  let vp = 0;
  const blkOffset = (r = readVarint(valBuf, vp), vp = r.nextPos, r.val);
  const blkSize = (r = readVarint(valBuf, vp), vp = r.nextPos, r.val);
  allBlocks.push({ key: key.toString('latin1'), offset: blkOffset, size: blkSize });
}

console.log('Checking all blocks for keys...');
const targets = [
  'globotech_erp_products',
  'globotech_erp_stock_ledger',
  'globotech_erp_quotations',
  'globotech_erp_customers',
  'globotech_erp_client_directory',
  'globotech_erp_suppliers',
  'globotech_erp_serials',
  'globotech_erp_settings'
];

allBlocks.forEach((b, i) => {
  const raw = ldb.slice(b.offset, b.offset + b.size);
  const compType = ldb[b.offset + b.size];
  let uncompressed = raw;
  try {
    if (compType === 1) uncompressed = decompressSnappy(raw);
    const text = uncompressed.toString('utf8');
    targets.forEach(t => {
      if (text.includes(t)) {
        console.log(`Key "${t}" found in Block ${i} (offset: ${b.offset}, size: ${b.size})`);
      }
    });
  } catch (e) {}
});
