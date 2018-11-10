/*
* 数组的一顿操作
* */

//数组的复制
const a1 = [1, 2];
const a2 = a1;

const a3 = [4, 5];
const a4 = a3.concat();

console.log(a4[1]);

//数组的合并
const b1 = ['a', 'b'];
const b2 = ['c'];
const b3 = ['d', 'e'];
const b4 = ['f', 'g'];

// b1.concat(b2, b3, b4);
const b5 = [...b1, ...b2, ...b3, ...b4];

console.log(b5);

b4[1] = 0;

console.log(b4);
console.log(b5);
/*
* 根据文档解释，以上是属于浅拷贝，如果修改了原数组中的数据，会反映到已经合并的新数组里面去
* 但是我修改了b4中的元素，却没有反映在b5当中去,不知道是不是我电脑该换了
* */

//下面这个例子是一个以我现在的水平想象不到的例子作用
const [aitem, bitem, ...citem] = [0, 1, 2, 3, 4, 5, 6];

console.log(aitem);
console.log(bitem);
console.log(citem);
//简单的理解就是将数组分成另外一个数组和若干个子元素，且...只能放到数组的最后一位

/*
* 接下来是将一个有规律的json变成一个数组，虽然暂时不知道有什么用，不过我还是暂时记录下来吧
* */
var arrayjson = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
    // length: 3
}
arrayjson.length = 3;

var arraychange = Array.from(arrayjson);
console.log(arraychange);

/*
* 另外一个将数组中的一部分参数复制到数组的另外一个地方，覆盖原来的数组元素
* 当然，还是不知道他是干什么用的
* */
var copyarray = [1, 2, 3, 4, 5, 6];
/*
* 这个的意思就是，先从第二个参数开始解释，
* 第二个参数的意思是从数组的排序的第三个元素开始到第四个元素结束，进行复制
* 3和5的意思是第三个 第四个 不包括第五个
* 然后从数组的第一个元素开始进行进行覆盖
* */
console.log(copyarray.copyWithin(1, 3, 5));



