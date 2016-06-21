var soi = require('socket.io');
var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('hello');

}).listen(1337, '127.0.0.1');
var soi_server = soi.listen(server);

soi_server.on('connection', (socket) => {
    console.log('client connection is established');
});

soi_server.send(' i am a socket.io message');

soi_server.on('message', (msg) => {
    process.stdout.write(msg);
});

soi_server.on('disconnect', ()=>{
	console.log('服务器断开连接');
});