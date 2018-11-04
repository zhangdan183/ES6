/**
 *  以上是ES5的写法
 * */
function log(x, y){
    y = y || 'world';
    console.log(x, y)
}
//需要测试为 ""  null undefined 或者不传的时候 到底怎么样
log('hello+', null);

log('hello+', "");

log('hello+', "zhangdan");

log('hello+');

log('hello+', name);

var name = '';

/**
 * 接下来是ES6的写法
 * */

function loga(x, y = 2){
    console.log(x, y);
}

loga('hello');

loga('hello', 'china');

loga('hello', "");

loga('hello', null);

loga('hello+', che);

var che = '';

