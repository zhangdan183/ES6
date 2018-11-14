/**
 * 需要介绍的是 进行SET设置的参数，里面不会出现重复的值
 * */

const s = new Set([1,2,3,4,4,5,5,6]);
console.log([...s]);
//[ 1, 2, 3, 4, 5, 6 ]  也可以写为

const set = new Set();
let array = [1,2,3,4,4,5,5,6];

array.forEach(x => set.add(x));

console.log([...set]);

/**
 * 数字等东西是相等的
 * NAN也是相等的
 * 但是对象是不相等的，即使眼看着相等，也不相等
 *
 * 但是删除的时候 如果两个函数看着一样的话，会全部一起删掉
 * */

let setone = new Set();
setone.add(1);
setone.add(2);
setone.add(2);
setone.add({a: 1});
setone.add({a: 1});

console.log(setone.size);
console.log(setone.has(1));

setone.delete({a: 1});

console.log(setone.has({a: 1}));

/**
 * Array.from 将对象转为数组 感觉比...稍微正式一点
 * */

const items = new Set([1, 2, 3, 4, 5]);
const arrayzhuan = Array.from(items);
console.log(arrayzhuan);


console.log("----遍历操作--------------------------------------------------");

let settwo = new Set([1, 2, 3, 4, 5]);

for (let item of settwo.keys()) {
    console.log(item);
}

for (let item of settwo.values()) {
    console.log(item);
}

for (let item of settwo.entries()) {
    console.log(item);
}

console.log("----并集交集差集--------------------------------------------------");

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
