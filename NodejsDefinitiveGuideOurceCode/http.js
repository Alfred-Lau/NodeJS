var http = require('http');
var fs = require('fs');
http.createServer((req, res)=>{

	if (req.url !== '/favicon.ico') {
		var out = fs.createWriteStream('./out.log');
		out.write('使用方法:' + req.method);
		out.end();
	}

	res.end();
	// console.log(req);
	// res.end('la');
}).listen(3000, '127.0.0.1');

