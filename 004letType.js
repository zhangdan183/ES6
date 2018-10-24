/**
 * ES6的独特声明方法，相同类型的声明可以用类似于数组的方式声明
 * */


//正常情况下的声明方式是一行一行的声明
let a = 'a';
let b = 'b';
let c = 'c';

//ES6的声明方式则是

let [d, e, f] = [4, 5, 6];

console.log(e);

//接下来就是复制官网的另外几种声明方式

let [foo, [[bar], baz]] = [1, [[2], 3]];//这个是多层声明方式，跟单层方式差不多
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];//如果没有声明 也会按位置来比配到对应的参数
third // "baz"

let [x, , y] = [1, 2, 3];//这个跟上面的那个例子是一样的
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4]; //声明整个数组中的后半部分，用三个点来统一代替
head // 1
tail // [2, 3, 4] 这个地方好像是一个数组
console.log("到底是不是个数组" + typeof tail + "===" + tail.length);

// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []