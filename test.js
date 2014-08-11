'use strict';
var net   = require('net');
var stats = require('./stats');

var count = 0;

function connect() {
  var time = Date.now();
  var conn = net.createConnection(8124);

  conn.on('connect', function () {
    console.log('#%d', count++);
    stats.collect('connect', Date.now() - time);
    conn.write('Hello');
    conn.on('data', function () {
      stats.collect('data', Date.now() - time);
    });
  });

  conn.on('close', function () {
    conn.end();
  });
}

setInterval(connect, 100);

process.on('SIGINT', function () {
  stats.summarize();
  process.exit();
});
