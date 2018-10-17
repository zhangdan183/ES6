/**
 * 20181017 张丹 有关let和var的学习
 * 学习网址为：http://es6.ruanyifeng.com
 * github地址:  https://github.com/zhangdan183/ES6
 * 转载请注明出处
 * 阮一峰老师辛苦了
 *
 * 如果有理解错误，请大神及时纠正，谢谢。
 * */
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6


/**************************************/
/**
 *以上方法讲述的其实是 var和let的作用域不同，但是呢，官方使用的是b格比较高的
 * 展示方式，相反，比较简单的理解方法则是如下的方法，其实和上面的是一样的，只不过
 * 我理解的方法更直白一点，方便一些新人理解
 */

var a = [];
for (var i = 0; i < 10; i++){
    console.log("局部变量i的值为:" + i);
}
console.log("局部变量之外的i是否还管用:" + i);


var a = [];
for (let i = 0; i < 10; i++){
    console.log("局部变量i的值为:" + i);
}
console.log("局部变量之外的i是否还管用:" + i);

/**
 * 其实上面的方法简化一下就是下面的方法，考验的是let是局部变量，而var是全局变量
 * 的简单介绍方法
 *
 * 接下来还有一个概念就是针对 let 的概念
 * 1、不存在变量提升
 * 2、暂时性死区
 * 3、不允许重复声明
 */

//首先来解释第一点

console.log(foo); //会打印出来undefined
var foo = 2;

console.log(foot); //程序会直接报错，而不是打印该函数没有定义
let foot = 3;

//第二点 暂时性死区

var tmp = 123;
if(true){
    tmp = 456; //大括号里面为块级作用域 tmp为let声明 但是却声明在后面，所以该程序会直接抛出异常报错
    let tmp;
}

//第三点 不允许重复声明
//在块级作用域中，let方法是不允许在一个块级中对相同的函数声明两次，示例如下

// 报错
function func() {
    let a = 10;
    var a = 1;
}

// 报错
function func() {
    let a = 10;
    let a = 1;
}

function func(arg) {
    let arg; // 报错
}

function func(arg) {
    {
        let arg; // 不报错
    }
}
//总体来说相同的块级作用域，也就是相同的一个大括号里面，针对同一个函数，let只能使用一次

