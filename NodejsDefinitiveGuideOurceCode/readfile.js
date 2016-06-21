var fs = require('fs');


/**
1.{encoding:'utf-8'}
2.data.toString()
3.'utf-8'
 * 
 *
 */

// 异步
// fs.readFile('consoledir.js', 'utf-8', function(err, data) {
//     if (!err) {
//         console.log(data);
//     }
// });

// console.log('hello');

// 同步 


try {
    var data = fs.readFileSync('consoledir.js', 'utf-8');
    console.log(data);
    console.log('hello');

} catch (ex) {
    console.log('wrong');
}
