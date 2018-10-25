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



//symbol中的第一个属性
var mysymbol = Symbol();
let other = {};
other[mysymbol] = "name";
other.mysymbol = "zhangdan";

console.log(other.mysymbol + "=====" + other[mysymbol]);

//第二个没有看懂的他们说的比较好的地方
const log = {};

log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');
