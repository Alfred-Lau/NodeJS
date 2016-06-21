
//注意是util，不是utils
var utils = require('util'),
	EventEmitter = require('events').EventEmitter;

var server = function  () {
	console.log('init');
};

utils.inherits(server, EventEmitter);

var s = new server();

s.on('abc', function(){
	console.log('abc');
});


s.emit('abc');

