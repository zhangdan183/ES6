const obj1 = {
    foo: 123,
    get bar(){
        return 'abc'
    }
}

console.log(Object.getOwnPropertyDescriptors(obj1));

// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }


/**
 * 将一个空函数设为另外一个函数的 prototype ，该函数的变化
 * @type {{}}
 */
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

console.log(obj.y);

console.log(Object.getPrototypeOf(obj));


/**
 * 有关拆分OBJECT中的各种元素的问题
 * */
let objecten = {a: '1', b: '2', c: '3', d: '4'};

console.log(Object.keys(objecten));//将所有的键生成一个数组输出出来
console.log(Object.values(objecten));//将所有的值生成一个数组输出出来
console.log(Object.entries(objecten));//将整个对象生成数组并输出出来
/**
 * [ 'a', 'b', 'c', 'd' ]
 *[ '1', '2', '3', '4' ]
 *[ [ 'a', '1' ], [ 'b', '2' ], [ 'c', '3' ], [ 'd', '4' ] ]
 * */
//Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
])
// { foo: "bar", baz: 42 }
