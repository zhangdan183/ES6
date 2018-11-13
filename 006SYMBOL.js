/**
 * 学习一下ES6的另外一个函数的声明方法
 * symbol 学习目的则在笔记中已经写了随笔
 * 主要是为了学习Iterator
 * */

//测试第一个声明方法 看看声明之后打印出来的是什么东西

let a = Symbol();
let b = Symbol("zhang");
console.log(a);
console.log(b);



//symbol中的第一个属性 可以生成两个一样名称的属性
var mysymbol = Symbol();
let other = {};
other[mysymbol] = "name";
other.mysymbol = "zhangdan";

console.log(other.mysymbol + "=====" + other[mysymbol]);
//也可以一次申请多个symbol属性

var onesymbol = Symbol('one');
var twosymbol = Symbol('two');
other.onesymbol = 'zhangdanone';
console.log(other['onesymbol']);



//第二个没有看懂的他们说的比较好的地方
const log = {};

log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');


/**
 * 接下来要开始学习symbol.for
 * 这个方法应该是查询当前js中所有的symbol的值，看看是否有foo这个值，如果有就返回这个值，如果没有的话 就给附上这个值并返回
 * */
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true

// Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
// 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
// Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，
// 而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
// 比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，
// 但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
