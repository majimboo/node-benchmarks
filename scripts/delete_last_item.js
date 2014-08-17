'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// init
var count = 1024; // arbitrary round number
var someArr = new Array(count);
for (var i = 0; i < count; i++) {
  someArr[i] = i * 2;
}

var last4Items = someArr.length - 4;

// remove last 4 elements
suite
.add('splice', function() {
    var a = someArr.slice();
    a.splice(a.length - 4, 4);
})

.add('splice -', function() {
    var a = someArr.slice();
    a.splice(-4, 4);
})

.add('splice cached', function() {
    var a = someArr.slice();
    a.splice(last4Items, 4);
})

.add('array delete', function() {
    var b = someArr.slice();
    delete b[-1];
    delete b[-1];
    delete b[-1];
    delete b[-1];
})

.add('array pop', function() {
    var c = someArr.slice();
    c.pop();
    c.pop();
    c.pop();
    c.pop();
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
