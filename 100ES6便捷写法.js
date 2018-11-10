let ms = {};

function getItem(key){
    //解释：返回ms在key中的值，如果有就返回参数，如果没有就返回null
    return key in ms ? ms[key] : null;
}

function setItem(key, value){
    ms[key] = value;
}

function clear(){
    ms = {};
}

