// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });
var child_process = require('child_process');
// const system = require('system');
// 只有fork出来的nodejs子进程才能使用process.send()方法
//其他的子进程只能通过system.stdout.writeLine标准输出来进行消息传递
// const n = cp.fork(`${__dirname}/sub.js`);
// const spawn_child = cp.spawn('casperjs', ['spawn.js']);

var spawn_child = child_process.spawn('casperjs', ['spawn.js', "http://m.maoyan.com/?tmp=showcinemas&movieid=246063#tmp=showtime&cinemaid=264&movieid=246063&date=2016-02-15"], {
    // 'stdio': ['pipe', 'pipe', 'pipe']
});

var data = '';
var feedback = '';


// spawn_child.stdin.setEncoding('utf8');
// spawn_child.stdout.setEncoding('utf8');

spawn_child.stdout.on('message', (data) => {
    console.log('message Got');
});

spawn_child.stdout.on('data', (chunk) => {
    // console.log('data Got');

    data += chunk;

    if (data.indexOf('_end_') !== -1) {
        // 请求发布完成
        data = data.replace('_end_', '');
        data = JSON.parse(data);
        spawn_child.emit('feedback', data);
    } else {
        feedback += data;
        //spawn_child.emit( 'feedback');
    }
    // console.log(data);
});

spawn_child.stdout.on('end', (data) => {
    console.log(data);
});


spawn_child.on('feedback', function(_data) {
    // 返回数据
    console.log('主函数');
    console.log(_data);
    spawn_child.kill();
});

// var send = function(msg) {
//     system.stdout.writeLine(msg);
// };



// spawn_child.stdout.on('data', (chunk) => {
//     data += chunk;
// });


//父进程接收消息
//注意：此处的对象主体都是子进程，无论是发送还是接收消息
// n.on('message', (m) => {
//     console.log('PARENT got message:', m);
// });

// n.on('disconnect', function() {
//     console.log('child_process is disconected.');
// });

// n.on('exit', function() {
//     // 这个函数之中不要使用异步的函数，因为它是EventLoop的最后一个函数
//     console.log('going to be exit');
// });


// // 下面的使用方法是错误的。父进程不能对子进程进行退出前的安排
// // n.stdin.on('beforeExit', function() {
// //     console.log('child_before_Exit is executed');
// // })

// process.on('beforeExit', function() {
//     console.log('beforeExit is executed');
// })


// //自定义错误的捕获方式
// //console.log('uncaughtException for ${err}')为什么不行
// // process.on('uncaughtException', (err) => {
// //     console.log(err);
// // });

// // setTimeout(() => {
// //     console.log('still run');
// // }, 1000);


// // nonexistenceFun();

// // console.log('can not run ');

// //父进程发送消息
// n.send({ hello: 'world' });
