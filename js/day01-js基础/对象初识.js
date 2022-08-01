//创建对象的三种方式

// 1. 利用字变量创建对象
// 2. 利用new Object创建对象
// 3. 利用构造函数创建对象

var a = {
    username: "djl",
    password: "123456",
    login: function () {
        // console.log(username);
        // console.log(password);
        console.log("hi")
    }
}
console.log(a.username);
console.log(a.password);
a.login()


//.2. 利用new Object创建对象
var b=new Object()
b.username="djl2"
b.password="123456"
b.login=function () { console.log("hi"); }



//3. 利用构造函数创建对象
function createPerson(name,age,job){
    var o = new Object();
    o.name=name
    o.age=age
    o.job=job
    return o
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
console.log(person1.age);

// 工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）。随着JavaScript的发展，又一个新模式出现了。


function CreatePerson2(name,age,job){
   
    this.name=name
    this.age=age
    this.job=job
    this.sayName = function(){
        alert(this.name);
    };    

}

// 和createPerson的区别

// 没有显式地创建对象；

// 直接将属性和方法赋给了this对象；

// 没有return语句。

var person1=new CreatePerson2("Nicholas", 29, "Software Engineer")
var person2=new CreatePerson2("Nicholas1", 30, "Software Engineer")

console.log(person1.age);


// 要创建Person的新实例，必须使用new操作符。以这种方式调用构造函数实际上会经历以下4个步骤：

// 创建一个新对象；

// 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；

// 执行构造函数中的代码（为这个新对象添加属性）；

//返回新对象。


//任何函数，只要通过new操作符来调用，那它就可以作为构造函数
