/**
 * accept
 * receive
 * frame
 * decrypt
 * handle
 * encrypt
 * reply
 */
'use strict';

// load dependencies
var net = require('net');
var crypto = require('crypto');

// accept
var server = net.createServer(function (socket) {

  socket.on('error', function () {

  });

  // recieve
  socket.on('data', function receive(stream) {
    frame(stream, function (crypt) {
      decrypt(crypt, handle.bind());
    });
  });

  // TODO frame
  function frame(data, callback) {
    callback(data);
  }

  // decrypt
  function decrypt(crypt, callback) {
    var decipher = crypto.createDecipher('rc4','secret');
    var data = decipher.update(crypt, 'binary', 'utf8');
    data += decipher.final('utf8');
    callback(data);
  }

  // handle
  function handle(data) {
    console.log("just logging to simulate for delay");
    reply(data);
  }

  // encrypt
  function encrypt(data, callback) {
    var cipher = crypto.createCipher('rc4', 'secret');
    var crypt = cipher.update(data, 'utf8', 'binary');
    crypt += cipher.final('binary');

    callback(crypt);
  }

  // reply
  function reply(data) {
    encrypt(data, function () {
      socket.write(data);
    });
  }

}).listen(8124);


