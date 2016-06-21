
	//client.js
	
	var http = require('http');
	var querystring = require('querystring');
	
	var contents = querystring.stringify({
		name:'alf',
		email:'abc@qq.com',
		address:'alf, ustc',
	});
	
	var option = {
		host:'www.baidu.com',
		path:'/api/post.php',
		method:'POST',
		headers:{
			'Content-Type':'application/x-www-form-urlencoded',
			'Content-Length':contents.length
		}
	};
	
	var req = http.request(option, function (res) {
		res.setEncoding('utf-8');
		res.on('data', function (data) {
			console.log(data);
		});
	});
	
	req.write(contents);
	req.end();