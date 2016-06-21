var cp = require('child_process');

var worker;

function spawn(server, config) {
    worker = cp.spawn('node', [ server, config ], {
        stdio: [ 0, 1, 2, 'ipc' ]
    });
    worker.on('message', function (data) {
        console.log(data);
    });
    worker.on('exit', function (code) {
        if (code !== 0) {
            spawn(server, config);
        }
    });
}

function main(argv) {
    var serverpath = __dirname + '/server.js';
    spawn(serverpath, argv[0]);
    process.on('SIGTERM', function () {
        worker.kill();
        process.exit(0);
    });

}

main(process.argv.slice(2));
