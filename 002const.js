const pic = 0;
console.log(pic);

//已经使用const声明过的变量 不允许在进行赋值 否则的话代码根本编辑不过去

//而且作用域是和let是一个级别的 是局部作用域 只能由高到低来看

//也不能先使用后声明 这样也会报错

console.log(pic);

//如果是声明了数组的话可以向里面添加东西，但是不可以直接更改东西

const list = [];

list.push("name");

console.log(list.length);

//我靠我只是想写一个错误代码记录一下 不至于写了就报错吧


