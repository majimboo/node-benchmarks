'use strict';
var collected = {};

exports.collect = function (measure, time) {
  if (!collected[measure]) collected[measure] = [];
  collected[measure].push(time);
};

exports.summarize = function () {
  var keys = Object.keys(collected);

  for (var i = 0; i < keys.length; i++) {
    var key     = keys[i];
    var samples = collected[key];
    var average = 0;
    var sum     = 0;

    samples.forEach(function (sample) {
      sum += sample;
    });

    if (samples.length > 0) {
      average = sum / samples.length;
    }
    console.log('%s average: %d ms', key, average);
  }
};
