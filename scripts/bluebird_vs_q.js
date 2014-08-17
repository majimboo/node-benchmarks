'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

var bluebird = require('bluebird');
var q = require('q');

// init
function makeB() {
  return new bluebird(function(resolve) {
    resolve();
  });
}
function makeQ() {
  return q(function(resolve) {
    resolve();
  });
}

// add tests
suite
.add('bluebird', function() {
  makeB().then(function() {});
})

.add('q', function() {
  makeQ().then(function() {});
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
