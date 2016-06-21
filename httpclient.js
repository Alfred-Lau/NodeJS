// var http = require('http');

// var options = {
//     hostname: '127.0.0.1',
//     port: 3000,
//     method: 'POST',
//     headers: {
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//     }
// };
// var request = http.request(options, function(response) {
//     var body = [];

//     console.log(response.statusCode);
//     console.log(response.headers);

//     response.on('data', function(chunk) {
//         body.push(chunk);
//     });

//     response.on('end', function() {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     });
// });

// request.write('Hello World');
// request.end();

var https = require('https');

var options = {
    // 如果没有下面一句，会因为自签名被拒绝。
    rejectUnauthorized: false,
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

var request = https.request(options, function(response) {});

request.end();
