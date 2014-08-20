'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;
var underscore = require('underscore');
var lodash     = require('lodash');

// init
var arr = [], larr;
for (var i = 0; i < 1000; i++) {
  arr.push(i);
}

function someFn(ix) {
  return ix * 5 + 1 / 3 * 8;
}

// add tests
suite
.add('For loop basic', function() {
  for (var i = 0; i < arr.length; i++) {
    someFn(arr[i]);
  }
})

.add('While loop basic', function() {
  var i = 0;
  while (i < arr.length) {
    someFn(arr[i]);
    i++;
  }
})

.add('For loop cached', function() {
  for (var i = 0, len = arr.length; i < len; i++) {
    someFn(arr[i]);
  }
})

.add('For loop i--', function() {
  for (var i = arr.length; i > 0; i--) {
    someFn(arr[i]);
  }
})

.add('Do-while loop i--', function() {
  var i = arr.length - 1;
  do {
    someFn(arr[i]);
  }
  while (i--);
})

.add('Do-while loop --i', function() {
  var i = arr.length;
  if (i > 0) {
    do {
      someFn(arr[i]);
    }
    while (--i);
  }
})

.add('For..in loop', function() {
  for (var i in arr) {
    someFn(arr[i]);
  }
})

.add('Array#forEach', function() {
  arr.forEach(function (v){
    someFn(v);
  });
})

.add('underscore#each', function() {
  underscore.each(arr, function (item) {
    someFn(item);
  });
})

.add('lodash#each', function() {
  lodash.each(arr, function (item) {
    someFn(item);
  });
})

.add('shift valid', function() {
  larr = arr.slice(0);
  while( (i = larr.shift()) !== undefined ) {
    someFn(i);
  }
})

.add('pop valid', function() {
  larr = arr.slice(0);
  while( (i = larr.pop()) !== undefined) {
    someFn(i);
  }
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
