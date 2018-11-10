/*
* 一个简单的声明方法
* */

var birthday = '2018-02-02';

var jsontype = {
    name: '张丹',
    birthday,//只写一个方式就可以了，不用写birthday: birthday就可以了
    hello(){
        console.log('你好');
    }
}


console.log(jsontype.birthday);

jsontype.hello();

/**************************************************************************************************/

