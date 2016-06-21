var repl = require('repl');

var con = repl.start().context;
con.msg = 'demo';
con.testFunction = function () {
	console.log(con.msg);
}