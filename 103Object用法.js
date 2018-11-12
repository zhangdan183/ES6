/*
* ES6 中和 普通的js中的三个等号相同的属性的方法
* */

console.log(Object.is('zhang', 'zhang'+''));
console.log(Object.is(+0, -0));


/*
* 合并两个参数，如果有相同参数，那么后面的数值覆盖前面的
* */

var json1 = {a: 1, b: 2};
var json2 = {b: 3, c: 4, d: 5};

var json3 = Object.assign(json1, json2);
console.log(json3);


const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

//覆盖数组
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

const objone = Object.create(prot);
objone.foo = '123';

console.log(objone);
