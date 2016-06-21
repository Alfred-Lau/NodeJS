let fs = require('fs');
const path = './mkdirfolder';
// mkdir
fs.mkdir(path, (err) => {
    console.log('failed');
});
