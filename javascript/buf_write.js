'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// Checker
function checkInt(buffer, value, offset, ext, max, min) {
  if (!(buffer instanceof Buffer)) {
    throw new TypeError('buffer must be a Buffer instance');
  }
  if (value > max || value < min) {
    throw new TypeError('value is out of bounds');
  }
  if (offset + ext > buffer.length) {
    throw new RangeError('index out of range');
  }
}

// LE
Buffer.prototype.myWriteUInt16LE = function(value, offset, noAssert) {
  value = parseInt(value, 10);
  offset = offset >>> 0;
  if (!noAssert) {
    checkInt(this, value, offset, 2, 0xffff, 0);
  }
  this[offset] = value & 0xFF;
  this[offset + 1] = (value >> 8) & 0xFF;
  return offset + 2;
};

Buffer.prototype.myWriteUInt32LE = function(value, offset, noAssert) {
  value = parseInt(value, 10);
  offset = offset >>> 0;
  if (!noAssert) {
    checkInt(this, value, offset, 4, 0xffffffff, 0);
  }
  this[offset] = value & 0xFF;
  this[offset + 1] = (value >> 8) & 0xFF;
  this[offset + 2] = (value >> 16) & 0xFF;
  this[offset + 3] = (value >> 24) & 0xFF;
  return offset + 4;
};

var buf = new Buffer(4);

// add tests
suite
.add('buf.write', function() {
  buf.writeUInt16LE(500, 0);
  buf.writeUInt32LE(500, 0);
})

.add('buf.myWrite', function() {
  buf.myWriteUInt16LE(500, 0);
  buf.myWriteUInt32LE(500, 0);
})

.add('buf.write noAssert', function() {
  buf.writeUInt16LE(500, 0, true);
  buf.writeUInt32LE(500, 0, true);
})

.add('buf.myWrite noAssert', function() {
  buf.myWriteUInt16LE(500, 0, true);
  buf.myWriteUInt32LE(500, 0, true);
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
