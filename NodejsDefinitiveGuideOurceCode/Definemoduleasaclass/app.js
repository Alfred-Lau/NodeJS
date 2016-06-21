// 请使用./
var foo = require('./foo');

// 新建模块对象，非常重要
var fooInstance = new foo('alf');

// static sec

console.log(foo.staticProp);
console.log(foo.staticFunc());



// instance method
console.log(fooInstance.GetName());
console.log(fooInstance.name);
console.log(fooInstance._name);

