var tmp = new Date();

function f() {
    console.log(tmp);
    //铁定不会进入的判断
    if (false) {
        var tmp = 'hello world';
        console.log("是否已经进入");
    }
}

f();