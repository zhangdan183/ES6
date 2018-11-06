/**
 * 第一种箭头的解法
 * */
let v = 2;

var f = v => v;
//相当于
var f = function(v){
    return v;
}

console.log(f(v));

/**
 * 声明一个函数，返回一个json
 * 返回的函数要在外面加上小括号才可以
 * */

let id = '123';
let getItem = id => ({id: id, name: 'zhangdan'});
console.log(getItem(id));

/**
 * 第三种声明函数的方法 声明变量结构
 * */
let userjson = {
    oneitem : 'zhang',
    twoitem : 'dan'
};

const full = ({oneitem, twoitem}) => oneitem+"==="+twoitem;

console.log(full(userjson));