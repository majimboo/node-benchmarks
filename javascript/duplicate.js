'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// joyent/node/blob/5344d0c1034b28f9e6de914430d8c8436ad85105/lib/crypto.js#L609
function filterDuplicates(names) {
  // Drop all-caps names in favor of their lowercase aliases,
  // for example, 'sha1' instead of 'SHA1'.
  var ctx = {};
  names.forEach(function(name) {
    var key = name;
    if (/^[0-9A-Z\-]+$/.test(key)) key = key.toLowerCase();
    if (!ctx.hasOwnProperty(key) || ctx[key] < name)
      ctx[key] = name;
  });

  return Object.getOwnPropertyNames(ctx).map(function(key) {
    return ctx[key];
  }).sort();
}

function eliminateDuplicates(names) {
  var ctx = {};

  for (var i = 0; i < names.length; i++) {
    var key = names[i];
    var name = names[i];
    if (/^[0-9A-Z\-]+$/.test(key)) key = key.toLowerCase();
    if (!ctx.hasOwnProperty(key) || ctx[key] < name) {
      ctx[key] = name;
    }
  }

  function map(arr) {
    var index, value, _i, _len, _results;
    _results = [];
    for (index = _i = 0, _len = arr.length; _i < _len; index = ++_i) {
      value = arr[index];
      _results.push(value + index);
    }
    return _results;
  }

  var keys = Object.keys(ctx);
  var ctx_names = [];
  for (var v = 0; v < keys.length; v++) {
    var k = keys[v];
    ctx_names.push(k);
  }

  return map(ctx_names).sort();
}

var duplicates = ["foo5","bar","baz","foo5","foo5","foo","foo5","foo5","foo5","foo","foo5","foo5","foo5","foo","foo5","foo5","foo5","foo","foo5","foo5","foo5","foo","bar","baz","bar","baz","bar","bazfoobs"];

// add tests
suite
.add('filterDuplicates', function() {
  filterDuplicates(duplicates);
})

.add('eliminateDuplicates', function() {
  eliminateDuplicates(duplicates);
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
