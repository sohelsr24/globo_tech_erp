const fs = require('fs');
const { decompressSnappy } = require('./snappy');

const ldb = fs.readFileSync('C:/Users/Sohel/AppData/Local/Google/Chrome/User Data/Profile 1/Local Storage/leveldb/003222.ldb');

function readVarint(buf, pos) {
  let val = 0n;
  let shift = 0n;
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

const indexBuf = ldb.slice(indexHandle.offset, indexHandle.offset + indexHandle.size);
const indexType = ldb[indexHandle.offset + indexHandle.size];

let decompressedIndex = indexBuf;
if (indexType === 1) {
  decompressedIndex = decompressSnappy(indexBuf);
}

const numRestarts = decompressedIndex.readUInt32LE(decompressedIndex.length - 4);
let idxPos = 0;
let lastKey = Buffer.alloc(0);
const dataBlocks = [];

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
  
  dataBlocks.push({ key: key.toString('latin1'), offset: blkOffset, size: blkSize });
}

console.log('Total data blocks:', dataBlocks.length);

dataBlocks.forEach((b, i) => {
  if (b.key.includes('erp') || (b.offset >= 1700000 && b.offset <= 1750000)) {
    console.log(`Block ${i}: offset=${b.offset}, size=${b.size}, key=${b.key.slice(0, 70)}`);
  }
});
