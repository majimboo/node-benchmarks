'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// init
var a;
var prependArray = function(value, oldArray) {
  var i, len = oldArray.length + 1,
     newArray = new Array(len);
  newArray[0] = value;
  for (i = 0; i < len; ++i) {
    newArray.push(oldArray[i]);
  }
  return newArray;
}

// add tests
suite
.add('unshift', function() {
  a = [1, 2, 3, 4];
  a.unshift(0);
})

.add('prepend fn', function() {
  a = [1, 2, 3, 4];
  prependArray(0, a);
})

.add('unshift no mutate', function() {
  a = [1, 2, 3, 4];
  a.slice(0).unshift(0);
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
