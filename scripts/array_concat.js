'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// init
var arr = Array.apply(null, {length: 50}).map(Function.call, Math.random);

// add tests
suite

.add('Array#concat', function() {
  var a = arr.slice(0);
  var b = arr.slice(0);

  a = a.concat(b);
})

.add('Array#push with loop', function() {
  var a = arr.slice(0);
  var b = arr.slice(0);
  var i = 0;
  var c = b.length;

  for (; i < c; ++i) {
    a.push(b[i]);
  }
})

.add('Array#push with loop while', function() {
  var a = arr.slice(0);
  var b = arr.slice(0);
  var c = b.length;

  while (c--) {
    a.push(b[c]);
  }
})

.add('Array#push with loop while 2', function() {
  var a = arr.slice(0);
  var b = arr.slice(0);
  var bl = b.length;
  var al = a.length;
  var i = 0;

  while (i < bl) {
    a[al++] = b[i++];
  }
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
