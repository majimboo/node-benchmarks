'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

suite
.add('if else', function() {
  ifElseTest("pizza");
  ifElseTest("water");
  ifElseTest("air");
})

.add('switch', function() {
  switchTest("pizza");
  switchTest("water");
  switchTest("air");
})

.add('lookup table', function() {
  lookupTable["pizza"]();
  lookupTable["water"]();
  lookupTable["air"]();
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


function ifElseTest(stuff) {
  if(stuff === "pizza") {
    return "food";
  } else if (stuff === "house") {
    return "building";
  } else if (stuff === "table") {
    return "furniture";
  } else if (stuff === "car") {
    return "driving";
  } else if (stuff === "water") {
    return "drink";
  } else if (stuff === "air") {
    return "nothing";
  }
};

function switchTest(stuff) {
  switch (stuff) {
    case "pizza":
      return "food";
    break;

    case "house":
      return "building";
    break;

    case "table":
      return "furniture";
    break;

    case "car":
      return "driving";
    break;

    case "water":
      return "drink";
    break;

    case "air":
      return "nothing";
    break;
  }
};

var lookupTable = {
  "pizza": function() {
    return "food";
  },
  "house": function() {
    return "building";
  },
  "table": function() {
    return "furniture";
  },
  "car": function() {
    return "driving";
  },
  "water": function() {
    return "drink";
  },
  "air":  function() {
    return "nothing";
  }
};
