// process.stdin.resume();

// process.stdin.on('data', function (chunk) {
// 	process.stdout.write('get data: ' + chunk);
// })


// process.argv.forEach((val, index, array) => {
//     process.stdout.write(index + ':' + val + '\n');
// });


var cp = require('child_process');

const child = cp.spawn('node', ['childprocess.js'], {
	detached : true,
	// 最好这么写，不要略写
	stdio : ['ignore','ignore','ignore']
});

child.unref();
// child.stdout.on('data', function (data) {
// 	process.stdout.write(data);
// });
// console.log('i am done');
