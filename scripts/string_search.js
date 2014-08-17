'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// init
var precompiledRegex = /(hello|worlds)/i;
var str = 'hello world string';

// add tests
suite
.add('regex#test', function() {
  /(hello|worlds)/i.test(str);
})

.add('string#search', function() {
  str.search(/(hello|worlds)/i) > -1;
})

.add('string#match', function() {
  str.match(/(hello|worlds)/i).length > 0;
})

.add('string#indexOf', function() {
  str.indexOf(/(hello|worlds)/i).length > 0;
})

.add('regex#test precompiled', function() {
  precompiledRegex.test(str);
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
