/**
 * 如果声明的方式是一个默认的JSON的话，默认值里面如果声明默认值的话，那么要跟json一样写的
 * */
function foo({x, y = 5} = {x: 3, y: 10}){
    console.log(x, y);
}

foo();

//网络请求默认信息
// function fetch(url, {body = '', method= 'GET', headers={}} = {}){
//     console.log(method);
// }


/**
 * 两种给出默认参数的方式不同，所以最后打印出来的东西也会不同
 * */
// 写法一
function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]