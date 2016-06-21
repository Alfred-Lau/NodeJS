	
	//http.js
	
	var http = require('http');
	
//	http.createServer(function (request, response) {
//	
//		//返回响应头
//		response.writeHead(200,{'Content-Type':'text/html'});
//		//返回响应体
//		response.write('<h1>Node.js is comming</h1>');
//		//结束并发送
//		response.end('<p>Hello ,world</p>');
//	//启动服务器并监听端口3000
//	}).listen(3000);
//	
//	console.log('http server is listening at port 3000.');


	//Get
//	var url = require('url');
//	var util = require('util');
//
//	http.createServer(function (request, response) {
//		response.writeHead(200,{'Content-Type':'text/plain'});
//		response.end(util.inspect(url.parse(request.url,true)));
//	}).listen(3000);
//	
	
	//Post
	
	var querystring = require('querystring');
	var util = require('util');
	
	http.createServer(function (request, response) {
		var post = '';
		
		request.on('data',function (chunk) {
			post += chunk;
		});
		
		request.on('end', function () {
			post = querystring.parse(post);
			response.end(util.inspect(post));
		});
	}).listen(3000);