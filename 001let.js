/**
 * 20181017 张丹 有关let和var的学习
 * 学习网址为：http://es6.ruanyifeng.com
 * github地址:  https://github.com/zhangdan183/ES6
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
 * 接下来还有一个逻辑功能就是
 */