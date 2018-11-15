/**
 * MAP的几种属性
 * */

//size属性

const set = new Set();
set.add(['aaa', 1]);
set.add(['bbb', 2]);


const map = new Map(set);

console.log(map.size);

console.log(map.get('aaa'));

map.set('ccc', 3)

console.log(map.delete('ccc'));

console.log(map.has('ccc'));

console.log(map.clear());

console.log(map.size);

