//闭包

var b = 100;
(function(a){
    console.log(a);
}(b));
console.log(a);