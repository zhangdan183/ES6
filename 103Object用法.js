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
/**
 * 使用这个方法也可以将两个相同的键不同值的两个ob进行覆盖，后者覆盖前者
 */
const target = { a: { b: 'c', d: 'e' } }
const source = { a: { b: 'hello' } }
Object.assign(target, source);

/**
 * 克隆一个obj到一个新的对象里面去
 * */
const oldobj = {a: 'a', b: 'b'};
const newobj = Object.assign({}, oldobj);
console.log(newobj);

