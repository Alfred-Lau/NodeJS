// public
var name = '';
// prvate
var _name;

// 构造函数

var foo = function(name) {
    _name = name;
};

foo.staticProp = 'i am static';

foo.staticFunc = function(){
	return 'i am static func';
};

foo.prototype.GetName = function() {
    return _name;
};

foo.prototype.SetName = function(name) {
    _name = name;
};

foo.prototype.name = name;

module.exports = foo;
