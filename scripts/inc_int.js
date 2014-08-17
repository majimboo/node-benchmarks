'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var a = 1024;
var b = a;
var c = a;
var d = a;

function increment(int) {
    int ^= (int & ~-~int) | (~int & -~int)
    return int;
}

// add tests
suite

.add('i++', function() {
  a++;
})

.add('++i', function() {
  ++b;
})

.add('i += 1', function() {
  c += 1;
})

.add('inc fn', function() {
  d = increment(d);
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
