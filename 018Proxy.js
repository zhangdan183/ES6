var target = new Object();
var proxy = new Proxy(target, {
    get: function(target, property){
        console.log(JSON.stringify(target) + '---' + property);
    }
});

proxy.a = '123';

console.log(proxy.a);

console.log(JSON.stringify(target));
