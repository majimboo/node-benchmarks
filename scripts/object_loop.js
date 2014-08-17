'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// Declaring our Animal object
var Animal = function () {

    this.name = 'unknown';

    this.getName = function () {
        return this.name;
    };

    return this;
};

// Declaring our Dog object
var Dog = function () {

    // overriding the name
    this.name = "Bello";

    // Implementing ".bark()"
    this.bark = function () {
        return 'MEOW';
    };

    return this;
};


// Dog extends animal
Dog.prototype = new Animal();

// Creating an instance of Dog.
var obj = new Dog();

// add tests
suite
.add('prop in Object', function() {
  for (var prop in obj) {
    if( obj.hasOwnProperty( prop ) ) {
      var result = obj[prop];
    }
  }
})

.add('forEach Object#keys', function() {
  Object.keys(obj).forEach(function (prop) {
    var result = obj[prop];
  });
})

.add('for Object#keys.length', function() {
  for (var i = 0, keys = Object.keys(obj); i < keys.length; i++) {
    var prop = keys[i];
    var result = obj[prop];
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
