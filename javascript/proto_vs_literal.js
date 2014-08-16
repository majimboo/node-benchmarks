'use strict';

var Benchmark  = require('benchmark');
var suite      = new Benchmark.Suite;

// prototype
function Person(firstName) {
  this.firstName = firstName;
}
Person.prototype.sayHello = function() {
  return "Hello, I'm " + this.firstName;
};
Person.prototype.sayHi = function() {
  return "Hi there, I'm " + this.firstName;
}

// literal
function Alien(firstName) {
  return {
    sayHello: function() {
      return "Hello, I'm " + firstName;
    },
    sayHi: function() {
      return "Hi there, I'm " + firstName;
    }
  }
}

// add tests
suite

.add('prototype', function() {
  var person = new Person('Zee');
  person.sayHello();
  person.sayHi();
})

.add('literal', function() {
  var alien = Alien('Ooz');
  alien.sayHello();
  alien.sayHi();
})

.add('prototype 1M', function() {
  for (var i = 0; i <= 1000000; i++) {
    var person = new Person('Zee'  + i);
    person.sayHello();
    person.sayHi();
  }
})

.add('literal 1M', function() {
  for (var i = 0; i <= 1000000; i++) {
    var alien = Alien('Ooz' + i);
    alien.sayHello();
    alien.sayHi();
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
