//1问
//console.log(num)

//2问
console.log(num) //ReferenceError: num is not defined 

var num=10      //underfind   坑 1   

//预执行
var num;
console.log(num)
num=10




//3问
fn();
function fn(){

console.log(11);   //11
}

//4问
var fun=function(){
    console.log(11);
}
fun()  //11

 
//5问
//如果把fun()放到 var fun的上面    //fun is not a function   坑2

//预解析
// var fun;
// fun() 
// fun=function(){
//     console.log(11);
// }

