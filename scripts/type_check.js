'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// init
var string = 'some_string';
var number = 1000;

// add tests
suite
.add('typeof', function() {
  typeof string === 'string';
  typeof number === 'number';
})

.add('constructor check', function() {
  string.constructor === String;
  number.constructor === Number;
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
