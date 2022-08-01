
//while循环

var i=0;
while(i<10){
    i+=2
console.log(i);
}



age=0;
count=0
while(age<100){
    age+=1
    count=age+count
    
}
console.log(count)
//计算1-100之间所有整数的和



//do while循环
var i=0
do {
    i+=1
    console.log(i);
} while (i<10);


//continue  
//立即跳出本次循环  继续下一次循环
for (let index = 0; index < 10; index++) {
    
   
    if(index==3){
    continue
    }
    console.log(index);
}
