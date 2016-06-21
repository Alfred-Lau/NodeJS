var fs = require('fs');



// fs.writeFile('writefile.txt', '第一行', function(err) {
//     if (!err) {
//         console.log('sussed');
//     }else{
//     	console.log('failed');
//     }
// });

var buf = new Buffer('我喜爱编程');
fs.writeFile('buf.txt', buf, function (err) {
	if (!err) {
		console.log('secceed');		
	} else {
		console.log('failed');
	}
})