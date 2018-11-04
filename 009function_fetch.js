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