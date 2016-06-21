var http = require('http');

http
    .createServer((req, res) => {
        if (req.url !== '/favicon.ico') {
            req.on('data', (data) => {
                console.log('服务器收到数据' + decodeURIComponent(data));
            });
            req.on('end', () => {
                console.log('end');
            });
        }
        res.end();
    })
    .listen(3000, '127.0.0.1');
