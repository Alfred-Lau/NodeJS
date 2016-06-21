// "use strict"

// function runTest(argument) {

// 	//Here: global without "var"
// 	variableOne = 'I am in function.';
// }

// runTest();
// alert(variableOne);


// function leftMove(argument) {
// 	var num = 2;
// 	var last = num << 5;
// 	alert(last);
// }

// leftMove();

// for (propName in window){
// 	document.write(propName);
// 	document.write('<br>');

// }

//Reference Class & Standard Class 
// var objOne = new Object();
// var objSec = objOne;

// alert(objSec.name);
// objOne.name = 'Alf';
// alert(objSec.name); 

// var colors = ['red','green','blue'];
// colors[colors.length] = 'black';
// alert(colors);

// function* range(start, stop) {
//   for (var i = start; i < stop; i++)
//     yield i;
// }

// alert(range(3, 5)); 

//function is an Object   !!! So---

// function sum(num1, num2){
// 	alert(arguments.callee);
// 	return num1 + num2;
// }

// //is equal to

// var sumFunc = function (num1, num2){
// 	return num1 + num2;
// };


// sum(1, 2);

//Two special val inside Function : arguments  && this  ,    arguments.callee && arguments.caller

// window.color = 'red';

// var o = {color : 'blue'};


// function sayColor() {
// 	alert(this.color);  //red
// }

// sayColor();

// o.sayColor = sayColor;
// o.sayColor() ;  //blue

//global Object

// var global=  function(){
// 	return this;
// }();

// // alert(global);


// //Math Method
// // 此处只能出现单独数字，不能使用数组，会出错
// var min = Math.min(2, 1, 4, 6, 9, 5 );
// var max = Math.max(2, 1, 4, 6, 9, 5 );

// alert(max);
// alert(min);

//Way 1 : 添加属性
// var person = new Object();

// person.name = 'alf';

// person.sayHi = function(){
// 	alert(this.name);
// };


// person.sayHi();

// person.sayHi();

// //Way 2 : 字符串字面量

// var personSec = {
// 	name : 'alf',
// 	sayHi : function () {
// 		alert(this.name);
// 	}
// };

// personSec.sayHi();

//函数模仿块级作用域
// var name = [1,2,3,4,5,6,];
// function squareField() {
// 	for (var i = name.length - 1; i >= 0; i--) {
// 		// name[i]
// 	}
// 	//
// 	alert(i);
// }

// // alert(i);

// squareField();

// var age = 29;
// function sayAge() {
// 	//由于sayAge()存在于全局作用域中，因此this.age被映射到window.age上面
// 	alert(this.age);		
// }

// alert(window.age);
// sayAge();
// window.sayAge();

// alert(window.top);

// window.open('http://www.baidu.com', 'mainFrame');


// var wroxWin = window.open("http://www.baidu.com","_blank","height=400px");
// //Attr: opener
// alert(wroxWin.opener == window);



//间歇调用和超时调用

//超时调用:在指定的时间之后执行

// setTimeout(function(){
// 	alert('setTimeout is called');

// 	//超时调用是在全局作用域之中执行的，因此this在非严格的时候指向window，严格的时候undefined
// 	alert(this);
// }, 1000);

// //不建议使用这种使用方法,可能导致性能损失
// var setTimeOutID = setTimeout("alert('setTimeout is called again')", 2000);

// //取消超时调用
// clearTimeout(setTimeOutID);

// 间歇调用：每隔一段时间就执行一次代码，直至间歇调用被取消，或者页面被卸载;尽量使用超时调用，不要使用间歇调用

// i = 0;
// setInterval(function(){
// 	i++;
// 	alert(i + 'hello,setInterval');
// }, 1000);


//取消间歇调用

// clearInterval()


// 系统对话框(警告，确认，提示)

// var msg = confirm('Are you Sure?');
// if (msg) {
// 	alert('OK');
// } else {
// 	alert('cancel');
// }


// var name = prompt('What is your name ?', 'Alf');

// if (name !== null) {
// 	alert('your name is : ' + name);
// } else {
// 	alert('Nothing available');
// }

// //异步显示打印窗口
// window.print();


// // 异步显示查找窗口
// window.find();


/*
Location Object: 最有用的BOM对象,提供了与当前窗口中加载的文档有关的信息，
还提供了一些导航功能
Location对象既是window对象的属性，也是document对象的属性
Location对象不只保存着当前文档的信息，还表现在它将URL解析为独立的片段，
让开发人员可以通过不同的属性访问这些片段

*/

// alert(window.location === document.location);

// // var URL = 'http://www.w3school.com.cn:8080/jsref/met_win_open.asp';

// alert(location.host);
// alert(location.pathname);
// alert(location.href);
// alert(location.port);
// alert(location.protocol);
// alert(location.search);

// location.assign('http://www.baidu.com');

// window.location = 'http://www.baidu.com';

/*
最常用,可以通过修改location对象的其他属性来改变当前加载的页面，每次修改之后，页面都会以新的URL
重新加载
*/

// location.href = 'http://www.bauidu.com';

// //防止生成历史记录，避免用户回到前一个页面的方法，使用函数replace()

// setTimeout(function(){
// 	location.replace('http://www.baidu.com');
// }, 1000);

// /*重新加载：位于reload函数之后的代码可能会也可能不会执行，取决于网络延迟和系统资源等因素，为此*/
// /*最好将reload放在代码最后一行*/
// //最有效加载，有可能从缓存加载
// location.reload();
// //从服务器重新加载
// location.reload(true);



//navigator对象:表中的navigator对象的属性通常用于检测网页的浏览器类型

// alert(navigator.appCodeName);
// alert(navigator.product);

// 除IE10--之外，检测插件函数, navigator.plugins包含了BOM包含的所有的插件对象

// function hasPlugin(name){
// 	name = name.toLowerCase();
// 	for (var i = navigator.plugins.length - 1; i >= 0; i--) {
// 		var plugin = navigator.plugins[i];
// 		if (plugin.name.toLowerCase().indexOf(name) > -1) {
// 			return true;
// 		} else {

// 		}
// 	}

// 	return false;
// }


// //
// alert(hasPlugin('Flash'));
// alert(hasPlugin('QuickTime'));


// //IE检测插件函数

// function hasIEPlugin(name) {
// 	try{
// 		new ActiveXObject(name);
// 		return true;
// 	}catch (ex){
// 		return false;
// 	}
// }
// //参数必须为COM标识符
// alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));
// alert(hasIEPlugin('QuickTime.QuickTime'));

// //plugins集合有一个名叫refresh的方法，用于刷新plugins以反映最新安装的插件

// //screen对象：用处不大

// //history对象：保存着用户上网的历史记录---go(),back(),forward()

// //判断用户是否一开始就打开了页面
// if (history.length == 0) {
// 	alert('这是用户打开窗口之后的第一个页面');
// }

// var personSec = {
// 	name : 'alf',
// 	sayHi : function () {
// 		alert(this.name);
// 	}
// };
var personSec = {
	name : 'alf',
	sayHi : function () {
		alert(this.name);
	}
};


// function sayColor() {
// 	alert(this.color);  //red
// }

// sayColor();

// o.sayColor = sayColor;
// // o.sayColor() ;  //blue

// alert(String.fromCharCode(104, 101, 108, 108, 111));


// personSec.sayHi();


//返回所有可枚举属性的字符串数组
// function  Person() {
// }

// Person.prototype.sayHi = function() {
// 	alert('nothing');
// };

// alert(Object.keys(Person.prototype));

// alert('i am in');

// function containsAll(haystack, ...needles) {
//   for (var needle of needles) {
//     if (haystack.indexOf(needle) === -1) {
//       return false;
//     }
//   }
// 	return true;
// }




// // function containsAll(haystack, ...needles) {
// //   for (var needle of needles) {
// //     if (haystack.indexOf(needle) === -1) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// alert(containsAll("banana",  "ana"));//为什么函数名一定要是containsAll???
// alert(containAllVal("banana",  "ana"));


// var [head, ...tail] = [1, 2, 3, 4];
// console.log(tail);
 // [2, 3, 4]

 //闭包问题
// var name = "windows";
// var funcCompute = {
// 	name : 'my object',
// 	funcTest: function  () {
// 		return function  () {
// 			return this.name;
// 		};
// 	}
// };

// alert(funcCompute.funcTest()());//windows


// var name = "windows";
// var funcCompute = {
// 	name : 'my object',
// 	funcTest: function  () {
// 		var that = this;
// 		return function  () {
// 			return that.name;
// 		};
// 	}
// };

// alert(funcCompute.funcTest()());//my object

// document.title = 'Test Title Page';
// alert(document.URL);
// alert(document.domain);
// alert(document.referer);

// var o = {color:"black"};


// function sayColor(){
//     alert(this.color);
// }


// window.color = "red";

// sayColor();//red

// sayColor.bind(o)();//black


function name(pa1,pa2){
    [].apply(arguments);
    console.log(arguments.slice(0,1));
    console.log(typeof(arguments));
}

name("ane", "ds");

