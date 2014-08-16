'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

var net = require('net');

var server = net.createServer().listen(8888);
var socket = new net.Socket();
socket.connect(8888);

function strToInt(string) {
  var len = string.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = string.charCodeAt(i);
  }
  return arr;
}

function intToStr(arr) {
  var str = '';
  var i;
  while ( i = arr.shift() ) {
    str += String.fromCharCode(i);
  }
  return str;
}

function intToStrN(arr) {
  var len = arr.length;
  var str = '';
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(arr[i]);
  }
  return str;
}

// add tests
suite

.add('buffer', function() {
  var buf = new Buffer([0x05, 0x04, 0x03, 0x02, 0x01, 0x00]);

  for (var i = 0; i < buf.length; i++) {
    buf[i] ^= 0x80;
  }

  socket.write(buf, 'binary');
})

.add('string+', function() {
  var str = '\x00\x01\x02\x03\x04\x05';
  var arr = strToInt(str);

  for (var i = 0; i < arr.length; i++) {
    arr[i] ^= 0x80;
  }

  var mockbuf = intToStrN(arr);
  socket.write(mockbuf, 'utf8');
})

// .add('string', function() {
//   var str = '\x00\x01\x02\x03\x04\x05';
//   var arr = strToInt(str);

//   for (var i = 0; i < arr.length; i++) {
//     arr[i] ^= 0x80;
//   }

//   var mockbuf = intToStrN(arr);
//   socket.write(mockbuf, 'utf8');
// })

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  socket.destroy();
  server.close();
  socket.unref();
  server.unref();
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });
