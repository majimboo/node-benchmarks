'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite();

// init
var vargs;
var args = Array.apply(null, {length: 10}).map(Function.call, Math.random);

function fake() {
  vargs = arguments;
}
fake.apply(null, args);

var slice = Array.prototype.slice;
var _slice = [].slice;

function slicer(items, start) {
  start = start || 0;
  var len = items.length;
  var arr = new Array(len - start);

  for (var i = start; i < len; i++){
    arr[i - start] = items[i];
  }

  return arr;
}

// add tests
suite

.add('Array.prototype.slice', function() {
  Array.prototype.slice.call(vargs, 1);
})

.add('[].slice', function() {
  [].slice.call(vargs, 1);
})

.add('cached Array.prototype.slice', function() {
  slice.call(vargs, 1);
})

.add('cached [].slice', function() {
  _slice.call(vargs, 1);
})

.add('slicer', function() {
  slicer(vargs, 1);
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
