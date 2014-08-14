'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;
var underscore = require('underscore');
var lodash     = require('lodash');

// init
var f = function() {
  return this;
};

// add tests
suite
.add('direct', function() {
  f();
})

.add('apply', function() {
  f.apply(this);
})

.add('call', function() {
  f.call(this);
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
