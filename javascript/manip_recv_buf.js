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

function bufToInt(buf) {
  var len = buf.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = buf[i];
  }
  return arr;
}

var recv_buf = new Buffer([0x05, 0x04, 0x03, 0x02, 0x01, 0x00]);

// add tests
suite

.add('buffer', function() {
  var buf = recv_buf;
  var result = [];
  var len = buf.length;

  // prepend size
  result.push(len + 1);
  for (var i = 0; i < len; i++) {
    result.push(buf[i] ^ 0x0A);
  }

  // send with prepended size
  socket.write(new Buffer(result));
})

.add('string', function() {
  // treat recv buffer as int arr
  var buf = bufToInt(recv_buf); // try recv_buf.toJSON()
  var len = buf.length;

  for (var i = 0; i < len; i++) {
    buf[i] ^= 0x0A;
  }

  // prepend size
  buf.unshift(len + 1);

  var mockbuf = intToStrN(buf);
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
