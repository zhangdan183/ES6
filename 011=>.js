let v = 2;

var f = v => v;
//相当于
var f = function(v){
    return v;
}

console.log(f(v));