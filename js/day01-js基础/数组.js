var arr1=new Array() //创建一个空数组
var arr2=[]
var arr3=[1,2,3,4]

console.log(arr3[1]);

var count=0
for (let index = 0; index < arr3.length; index++) {
   count+=arr3[index]
}
var avg=count/arr3.length
console.log(avg)


arr4=[2,89,22,11]
//求数组的最大值
var max=0
for (let index = 1; index < arr4.length; index++) {
    if(arr4[index]>max){
        max=arr4[index]
    }
}
console.log(max);