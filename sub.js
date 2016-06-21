//子进程接收消息
process.on('message', (m) => {
    console.log('CHILD got message:', m);
});
//子进程发送消息
process.send({ foo: 'bar' });


process.disconnect();
