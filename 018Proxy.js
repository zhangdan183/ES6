
var person = {
    xingming: 'zhangdan',
    score: 59
}


var proxy = new Proxy(person, {
    get: function(target, property){
        if (property in target){
            return target[property];
        } else {
            return 'zhang';
        }
    },
    set: function(target, p, value, receiver){
        console.log(JSON.stringify(target) +'---'+ p +'---'+ value +'---')

        target[p] = receiver;

    },
    has: function(target, p){
        console.log(target + "---" + p);
        if (p === 'score' && target[p] < 60){
            console.log('不及格');
            return false;
        }
        return p in target;
    },
    /***
     * target：目标对象
     * args：构造函数的参数对象
     * newTarget：创造实例对象时，new命令作用的构造函数（下面例子的p）
     * @param target
     * @param argArray
     * @param newTarget
     */
    construct: function(target, argArray, newTarget){
        
    }
});

console.log(proxy.name);
proxy.aaa = '123';

console.log(person);
console.log(proxy);


console.log('score' in proxy);
