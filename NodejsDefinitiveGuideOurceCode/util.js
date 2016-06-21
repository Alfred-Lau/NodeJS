var util = require('util');

console.log(util.inspect({ name: 'hello', age: { andy: 'lau', age: { name: 'age' } } }, { colors: true }));
