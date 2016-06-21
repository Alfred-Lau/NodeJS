var fs = require('fs');
var path = require('path');
var _self = this;
exports.travel = function(dir, cb) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {

        	// 这两种方法都可以实现对自身的调用
            // exports.travel(pathname, cb);
            _self.travel(pathname, cb);
        } else {
            cb(pathname);
        }
    });
}
