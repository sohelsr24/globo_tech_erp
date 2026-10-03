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
let p = 16, r;
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

console.log('Total blocks in table:', allBlocks.length);

allBlocks.forEach((b, i) => {
  if (b.offset >= 1700000 && b.offset <= 1750000) {
    console.log('Block ' + i + ': offset=' + b.offset + ', size=' + b.size + ', key=' + b.key.slice(0, 60));
  }
});
