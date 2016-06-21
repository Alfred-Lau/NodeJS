var loop = require('./loopdir');


function cb(pathname) {
	console.log(pathname); 
}


loop.travel('/usr/local/lib/node_modules/express/lib', cb);