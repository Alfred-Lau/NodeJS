var zlib = require('zlib');
var http = require('http');

http.createServer(function(req, res) {
    var num = 1024;
    var data = '';

    while (num--) {
        data += '.';
    }
    console.log('hhshs');

    if ((req.headers['accept-encoding']).indexOf('gzip') !== -1) {
        zlib.gzip(data, function(err, result) {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Encoding': 'gzip'
            });
            res.end(result);
        })
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        });
        res.end(result);

    }
}).listen(3000, '127.0.0.1');


// http.createServer(function(request, response) {
//     var i = 1024,
//         data = '';

//     while (i--) {
//         data += '.';
//     }

//     if ((request.headers['accept-encoding'] || '').indexOf('gzip') !== -1) {
//         zlib.gzip(data, function(err, data) {
//             response.writeHead(200, {
//                 'Content-Type': 'text/plain',
//                 'Content-Encoding': 'gzip'
//             });
//             response.end(data);
//         });
//     } else {
//         response.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         response.end(data);
//     }
// }).listen(3000);