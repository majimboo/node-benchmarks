'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;
var underscore = require('underscore');
var lodash     = require('lodash');

// init
var arr = Array.apply(null, {length: 50}).map(Function.call, Math.random);

// add tests
suite
.add('Array#filter', function() {
  arr.filter(function (n) { return n % 2 === 0; });
})

.add('underscore#filter', function() {
  underscore.filter(arr, function (n) { return n % 2 === 0; });
})

.add('lodash#filter', function() {
  lodash.filter(arr, function (n) { return n % 2 === 0; });
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
