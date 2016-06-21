var http = require('http');
//var PORT = process.argv[2] || 3000;

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<head><meta charset="utf-8"></head>');
//     res.end('Hello, Nodejs');
// }).listen(PORT, '127.0.0.1');
// // console.log('listen at ' + PORT);
// // console.log(process.env);
// console.error('this is an error.');



//eventemitter使用on绑定事件处理函数
// var server = http.createServer();

// server.on('request', (req, res) => {
//     // 屏蔽掉收藏夹图标，不等于一般都用两个等号
//     if (req.url !== '/favicon.ico') {
//         console.log(req.url);

//     }
//     res.end('nd');
// });

// server.listen(1230, '127.0.0.1');

// server.on('newListener', (event, func) => {
//     // eventHandler
// });

// server.on('removeListener', (event, func) => {
// 	// eventHandler
// });

// module.js

var myMsg = 'hello';

var myFunc = function () {
	console.log('i am module');
}

exports.msg = myMsg;
exports.func = myFunc;
