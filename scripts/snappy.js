// Pure JS Snappy Decompressor
function decompressSnappy(buf) {
  let pos = 0;
  // Read uncompressed length (varint)
  let uncompressedLen = 0;
  let shift = 0;
  while (pos < buf.length) {
    const b = buf[pos++];
    uncompressedLen |= (b & 0x7f) << shift;
    if ((b & 0x80) === 0) break;
    shift += 7;
  }
  
  const out = Buffer.alloc(uncompressedLen);
  let outPos = 0;
  
  while (pos < buf.length && outPos < uncompressedLen) {
    const tag = buf[pos++];
    const type = tag & 0x03;
    
    if (type === 0) {
      // Literal
      let len = tag >> 2;
      if (len < 60) {
        len += 1;
      } else if (len === 60) {
        len = buf[pos++] + 1;
      } else if (len === 61) {
        len = buf.readUInt16LE(pos) + 1;
        pos += 2;
      } else if (len === 62) {
        len = (buf[pos] | (buf[pos+1] << 8) | (buf[pos+2] << 16)) + 1;
        pos += 3;
      } else if (len === 63) {
        len = buf.readUInt32LE(pos) + 1;
        pos += 4;
      }
      buf.copy(out, outPos, pos, pos + len);
      pos += len;
      outPos += len;
    } else if (type === 1) {
      // Copy 1-byte offset
      const len = ((tag >> 2) & 0x07) + 4;
      const offset = ((tag & 0xe0) << 3) | buf[pos++];
      for (let i = 0; i < len; i++) {
        out[outPos + i] = out[outPos - offset + i];
      }
      outPos += len;
    } else if (type === 2) {
      // Copy 2-byte offset
      const len = (tag >> 2) + 1;
      const offset = buf.readUInt16LE(pos);
      pos += 2;
      for (let i = 0; i < len; i++) {
        out[outPos + i] = out[outPos - offset + i];
      }
      outPos += len;
    } else if (type === 3) {
      // Copy 4-byte offset
      const len = (tag >> 2) + 1;
      const offset = buf.readUInt32LE(pos);
      pos += 4;
      for (let i = 0; i < len; i++) {
        out[outPos + i] = out[outPos - offset + i];
      }
      outPos += len;
    }
  }
  
  return out.slice(0, outPos);
}

module.exports = { decompressSnappy };
