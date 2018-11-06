function timer(){
    this.s1 = 0;
    this.s2 = 0;

    setInterval(()=>this.s1++, 1000);
    setInterval(function(){
        this.s2++;
    }, 1000);
}

var timer = new timer();

setTimeout(()=> console.log(timer.s1), 3000);
setTimeout(()=> console.log(timer.s2), 3000);

/**
 * 针对两个不同写法，但是相同作用的两种函数的作用域
 *
 * 针对自己的理解就是相当于，同步函数跟异步函数的区别，同步函数中对应的this是可以操控父级函数中的this
 * 而function函数，则里面操控this只能操控函数里面的，而控制不了外面的
 *
 * */