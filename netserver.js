var net = require('net');

net.createServer(function (conn) {
	conn.on('data', function (chuck) {
		conn.write([
			'HTTP/1.1 200 OK',
			// 注意：属性名之后不能添加空格，添加之后出错不能终止
			'Content-Type: text/plain',
			'Content-Length: 11',
			'',
			'Hello World'
		].join('\n'));
	});


}).listen(3000, '127.0.0.1');

// net.createServer(function(conn) {
//     conn.on('data', function(data) {
//         conn.write([
//             'HTTP/1.1 200 OK',
//             'Content-Type: text/plain',
//             'Content-Length: 11',
//             '',
//             'Hello World'
//         ].join('\n'));
//     });
// }).listen(3000);
