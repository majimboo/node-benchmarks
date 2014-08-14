'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var a = "569";

// add tests
suite
.add('parseInt', function() {
  parseInt(a);
})

.add('parseInt(a,10)', function() {
  parseInt(a, 10);
})

.add('Math#floor', function() {
  Math.floor(a);
})

.add('+a', function() {
  +a;
})

.add('~~a', function() {
  ~~a;
})

.add('a | 0', function() {
  a|0;
})

.add('a * 1', function() {
  a*1;
})

.add('a / 1', function() {
  a/1;
})

.add('a % Infinity', function() {
  a%Infinity;
})

.add('a >> 0', function() {
  a >> 0;
})

.add('eval(a)', function() {
  eval(a);
})

.add('a ^ 0', function() {
  a ^ 0;
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
