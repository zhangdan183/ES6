/***
 * 声明一个函数，里面的参数使用get方法跟set方法来进行读取以及
 * 再不合适的时候抛出异常
 * @type {{page: number, pages: *}}
 */
const cart = {
    page: 10,
    get pages(){
        return this.page;
    },
    set pages(values){
        if(values < this.page){
            throw new Error('数值太小了');
        }
        this.page = values;
    }
}

console.log(cart.pages);

cart.pages = 5;



