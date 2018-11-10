/***
 * 声明json的时候，可以使用文档计算方法来计算
 * 可以把两个字符串拼接起来进行声明
 * @type {{zhang: string, [p: string]: string}}
 */

var json = {
    ['zhang']: 'dan',
    ['w'+'ei']: 'lei'
}

console.log(json.wei);

/***********************************/
let lastWord = 'last word';

const a = {
    'first word': 'hello',
    [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"

/*
* 貌似中括号的计算键的方法只能在声明一些json的对象中来计算，
* */