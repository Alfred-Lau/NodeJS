// var events = require('events');
// process.on('warning', (warning) => console.warn('Do not do that!'));
// events.defaultMaxListeners = 1;
// process.on('foo', () => {});
// process.on('foo', () => {});


process.argv.forEach((val, index, arr) => {
    //注意在log函数里面使用的不是单引号，而是``执行符号
    console.log(`${index} : ${val}`);
});


setTimeout(() => {
    console.log('not running');
}, 3000);


process.exitCode = 1;
// process.exit();
