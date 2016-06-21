var https = require('https');
var fs = require('fs');


var options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem'),
};

https.createServer(options, function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req.method);
    console.log(req.headers);

    var body = '';
    req.on('data', function(chunk) {
        res.write(chunk);
    });

    req.on('end', function() {
        res.end();
    });
}).listen(3000, '127.0.0.1');
