'use strict';

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var spawn = require('child_process').spawn;

var resultsPath = path.join(__dirname, 'results');

var scriptsPath = path.join(__dirname, 'scripts');

glob(path.join(scriptsPath, '*.js'), function (err, files) {
    // execute each node script
    files.forEach(function (file) {
        var node = spawn(process.execPath, [file]);

        var docFile = path.basename(file, '.js') + '.md';
        var resultPath = path.join(resultsPath, docFile);

        node.stdout.on('data', function (data) {
            fs.appendFileSync(resultPath, data);
        });
    });
});
