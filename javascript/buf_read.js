'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

function checkOffset(offset, ext, length) {
  if (offset + ext > length) {
    throw new RangeError('index out of range');
  }
}

// LE

Buffer.prototype.myReadUInt16LE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 2, this.length);
  }

  var val = this[offset];
  val |= this[offset + 1] << 8;
  val >>>= 0;
  return val;
};

Buffer.prototype.myReadUInt32LE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 4, this.length);
  }

  var val = this[offset];
  val |= this[offset + 1] << 8;
  val |= this[offset + 2] << 16;
  val |= this[offset + 3] << 24;
  val >>>= 0;
  return val;
};

Buffer.prototype.myReadInt16LE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 2, this.length);
  }

  var val = this[offset];
  val |= this[offset + 1] << 8;
  val >>>= 0;
  return (val + 0x8000) % 0x10000 - 0x8000;
};

Buffer.prototype.myReadInt32LE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 4, this.length);
  }

  var val = this[offset];
  val |= this[offset + 1] << 8;
  val |= this[offset + 2] << 16;
  val |= this[offset + 3] << 24;
  val >>>= 0;
  return (val + 0x80000000) % 0x100000000 - 0x80000000;
};

// BE

Buffer.prototype.myReadUInt16BE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 2, this.length);
  }

  var val = this[offset] << 8;
  val |= this[offset + 1];
  val >>>= 0;
  return val;
};

Buffer.prototype.myReadUInt32BE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 4, this.length);
  }

  var val = this[offset] << 24;
  val |= this[offset + 1] << 16;
  val |= this[offset + 2] << 8;
  val |= this[offset + 3];
  val >>>= 0;
  return val;
};

Buffer.prototype.myReadInt16BE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 2, this.length);
  }

  var val = this[offset] << 8;
  val |= this[offset + 1];
  val >>>= 0;
  return (val + 0x8000) % 0x10000 - 0x8000;
};

Buffer.prototype.myReadInt32BE = function(offset, noAssert) {
  offset = offset >>> 0;

  if (!noAssert) {
    checkOffset(offset, 4, this.length);
  }

  var val = this[offset] << 24;
  val |= this[offset + 1] << 16;
  val |= this[offset + 2] << 8;
  val |= this[offset + 3];
  val >>>= 0;
  return (val + 0x80000000) % 0x100000000 - 0x80000000;
};

var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF]);

// add tests
suite
.add('buf.read', function() {
  buf.readUInt16LE(0);
  buf.readUInt32LE(0);
  buf.readInt16LE(0);
  buf.readInt32LE(0);
  buf.readUInt16BE(0);
  buf.readUInt32BE(0);
  buf.readInt16BE(0);
  buf.readInt32BE(0);
})

.add('buf.myRead', function() {
  buf.myReadUInt16LE(0);
  buf.myReadUInt32LE(0);
  buf.myReadInt16LE(0);
  buf.myReadInt32LE(0);
  buf.myReadUInt16BE(0);
  buf.myReadUInt32BE(0);
  buf.myReadInt16BE(0);
  buf.myReadInt32BE(0);
})

.add('buf.read noAssert', function() {
  buf.readUInt16LE(0, true);
  buf.readUInt32LE(0, true);
  buf.readInt16LE(0, true);
  buf.readInt32LE(0, true);
  buf.readUInt16BE(0, true);
  buf.readUInt32BE(0, true);
  buf.readInt16BE(0, true);
  buf.readInt32BE(0, true);
})

.add('buf.myRead noAssert', function() {
  buf.myReadUInt16LE(0, true);
  buf.myReadUInt32LE(0, true);
  buf.myReadInt16LE(0, true);
  buf.myReadInt32LE(0, true);
  buf.myReadUInt16BE(0, true);
  buf.myReadUInt32BE(0, true);
  buf.myReadInt16BE(0, true);
  buf.myReadInt32BE(0, true);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });
