var zlib = require('zlib');
var http = require('http');

var options = {
	hostname : '127.0.0.1',
	port : 3000,
	method : 'GET',
	path : '/',
	headers : {
		'Accept-Encoding' : 'gzip, deflate'
	}
};

var req = http.request(options, function (response) {
	var data = [];
	response.on('data', function (chuck) {
		data.push(chuck);
	});

	response.on('end', function () {
		data = Buffer.concat(data);

		if (response.headers['content-encoding'].indexOf('gzip') !== -1) {
			zlib.gunzip(data, function (err, result) {
				console.log(result.toString());
			});
		} else {
			console.log(result.toString());
		}	
	});
});

req.end();

