//process.js

//	console.log(process.argv);

// process.stdin.resume();

// process.stdin.on('data', function(data) {
//     process.stdout.write('read from console' + data.toString());
// });

// console.log('just text');



// //在nodejs的事件环结束退出程序之前触发，进行一下调度安排工作，异步
// process.on('beforeExit', function() {
//     setTimeout(function() {
//         console.log('come here');
//     }, 3000);
// });





// var time = process.hrtime();
// // [ 1800216, 25 ]

// setTimeout(() => {
//   var diff = process.hrtime(time);
//   console.log(diff);
//   // [ 1, 552 ]

//   console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
//   // benchmark took 1000000527 nanoseconds
// }, 1000);

/*
process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

setTimeout(() => {
  console.log('Exiting.');
  process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');


*/

process.on('SIGHUP', ()=>{
	console.log('Got SIGHUP signal.');
});

setTimeout(()=>{

	//当没有script脚本文件被启动（比如使用REPL）的时候，process.mainModule属性返回undefined
	console.log(process.mainModule);
	console.log('exiting...');
	process.exit(0);
}, 100);


process.kill(process.pid, 'SIGHUP');














