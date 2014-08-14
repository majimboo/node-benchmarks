'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var a = 10591.5123241;

// add tests
suite
.add('Math#floor', function() {
  Math.floor(a);
})

.add('parseInt', function() {
  parseInt(a);
})

.add('parseInt(a,10)', function() {
  parseInt(a, 10);
})

.add('~~a', function() {
  ~~a;
})

.add('a | a', function() {
  a|a;
})

.add('a | 0', function() {
  a|0;
})

.add('a & a', function() {
  a & a;
})

.add('a << 0', function() {
  a << 0;
})

.add('Int#toFixed', function() {
  a.toFixed();
})

.add('modulo', function() {
  a - a % 1;
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
