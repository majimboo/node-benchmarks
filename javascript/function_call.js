'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;
var underscore = require('underscore');
var lodash     = require('lodash');

// init
var f = function(v) {
  return v;
};

var y = function(v, callback) {
  callback(v);
};

// add tests
suite
.add('apply', function() {
  y('apply', function(v) {
    f.apply(this, [v]);
  });
})

.add('call', function() {
  y('call', function(v) {
    f.call(this, v);
  });
})

.add('bind', function() {
  y('bind', f.bind(this));
})

.add('direct', function() {
  y('callback', function(v) {
    f(v);
  });
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
