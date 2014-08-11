/**
 * accept
 * receive
 * frame
 * decrypt
 * handle
 * encrypt
 * reply
 */

// load dependencies
var net = require('net');
var crypto = require('crypto');

// start the server
var server = net.createServer();
server.listen(8124);
server.on('connection', accept.bind());

// accept
function accept(socket) {
  socket.on('data', receive.bind());
}

// recieve
function receive(stream) {
  frame(stream, function (crypt) {
    decrypt(crypt, handle.bind());
  });
}

// frame
function frame(data, callback) {

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

}

// encrypt
function encrypt(data, callback) {

}

// reply
function reply(data) {

}
