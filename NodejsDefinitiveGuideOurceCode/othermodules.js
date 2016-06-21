var dns = require('dns');

dns.resolve('www.baidu.com', 'A', (err, reuslt)=>{
    if (err) {
        console.log(e); 
    } else {
        console.log(reuslt);
    }
});