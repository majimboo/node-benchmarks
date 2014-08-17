'use strict';

var fs = require('fs');
var os = require('os');
var path = require('path');
var glob = require('glob');
var spawn = require('child_process').spawn;

var resultsPath = path.join(__dirname, 'results');

var scriptsPath = path.join(__dirname, 'scripts');

glob(path.join(scriptsPath, '*.js'), function (err, files) {
    var done = 0;
    var total = files.length;

    // execute each node script
    files.forEach(function (file) {
        var node = spawn(process.execPath, [file]);

        var docFile = path.basename(file, '.js') + '.md';
        var resultPath = path.join(resultsPath, docFile);
        var header = os.type() + ' ' + os.arch() + ' - ' + os.release() + '\n';

        fs.appendFileSync(resultPath, header);
        fs.appendFileSync(resultPath, '-----\n\n');
        fs.appendFileSync(resultPath, createHeader());
        fs.appendFileSync(resultPath, '\n\n');
        fs.appendFileSync(resultPath, '#### Benchmark Results ####\n\n');
        fs.appendFileSync(resultPath, '<table>');

        node.stdout.on('data', function (data) {
            if (data) {
                var resulta = data.toString().split(' x ');
                if (resulta[0] && resulta[1]) {
                    fs.appendFileSync(resultPath, '<tr>');
                    fs.appendFileSync(resultPath, '<td><b>' + resulta[0] + '</b></td>');
                    fs.appendFileSync(resultPath, '<td>' + resulta[1] + '</td>');
                    fs.appendFileSync(resultPath, '</tr>');
                }

                if (resulta[0] && !resulta[1]) {
                    fs.appendFileSync(resultPath, '</table>\n\n');
                    fs.appendFileSync(resultPath, '> Notes:\n');
                    fs.appendFileSync(resultPath, '> - ' + data);
                }
            }
        });

        node.on('exit', function() {
            fs.appendFileSync(resultPath, '\n\n');
            done++;
            console.log('['+done+'/'+total+']: ' + path.basename(file, '.js'));
        });
    });
});

function createHeader(data) {
    var html = '<table>' +
        '<tr>' +
            '<td><b>node</b></td>' +
            '<td><b>memory</b></td>' +
            '<td><b>cpu</b></td>' +
        '</tr>' +
        '<tr>' +
            '<td>' + process.version + '</td>' +
            '<td>' + bytesToSize(os.totalmem()) + '</td>' +
            '<td>' + os.cpus()[0].model + '</td>' +
        '</tr>' +
    '</table>';

    return html;
}

function bytesToSize(bytes) {
   if(bytes == 0) return '0 Byte';
   var k = 1000;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
