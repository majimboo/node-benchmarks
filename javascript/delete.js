'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// init
var count = 1024; // arbitrary round number

var source = new Array(count);
for (var i = 0; i < count; i++) {
  source[i] = i * 2;
}

var someArr = [4, 5, 6];
var someObj = {
    a: 4,
    b: 5,
    c: 6
};

// add tests
suite
.add('splice', function() {
    someArr.splice(1, 1);
})

.add('object delete', function() {
    delete someObj.b;
})

.add('array delete', function() {
    delete someArr[1];
})

.add('object subscript delete', function() {
    delete someObj['b'];
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
