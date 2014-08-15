'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

var underscore = require('underscore');
var lodash     = require('lodash');

var count = 1024; // arbitrary round number

var source = new Array(count);
for (var i = 0; i < count; i++) {
  source[i] = i * 2;
}

var func = function(value, index) {
  return value + index;
};

var comprehension = (function(arr) {
  var index, value, _i, _len, _results;
  _results = [];
  for (index = _i = 0, _len = arr.length; _i < _len; index = ++_i) {
    value = arr[index];
    _results.push(value + index);
  }
  return _results;
});

var loop = (function(arr, func) {
  var index, value, _i, _len, _results;
  _results = [];
  for (index = _i = 0, _len = arr.length; _i < _len; index = ++_i) {
    value = arr[index];
    _results.push(func(value, index));
  }
  return _results;
});

// add tests
suite
.add('CoffeeScript comprehension', function() {
  comprehension(source);
})

.add('for loop (with function call)', function() {
  loop(source, func);
})

.add('Array#map', function() {
  source.map(func);
})

.add('underscore#map', function() {
  underscore.map(source, func);
})

.add('lodash#map', function() {
  lodash.map(source, func);
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
