function point(x = 1, y = 4){
    this.xa = x;
    this.ya = y;
}

const pp = new point(22, 33);

console.log(pp.xa);

const qq = new point(55, 66);

console.log(qq);
/**
 * 重新定义函数以及函数中的内容
 * 多次声明也不会受到影响
 * */


//可以在声明函数中，利用计算方法来进行声明
let x = 100
function jisuanji(p = x + 2){
    console.log(p);
}

jisuanji();