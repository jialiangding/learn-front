function sum(a,b){
    return a+b;
}

console.log(sum(1,2));



// 形参和实参不匹配的情况 
function sum2(a,b,c){
    return a+b;
}
console.log(sum2(1,2));//3

function sum3(a,b,c){
    return a+b+c; 
}
console.log(sum3(1,2)); //NAN





function revertarr(arr1){
    var arr2=new Array() 
for (let index =  arr1.length-1; index >= 0; index--) {

   
    arr2.push(arr1[index])

}

for (let index2 = 0; index2 < arr2.length; index2++) {
    console.log(arr2[index2]);

}

}

var arr3=[1,2,3]
revertarr(arr3)


console.log("---------------")
//冒泡排序   [1 2 3 4 5 ]

function maopao(array){
for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j]>array[j+1]){
            var temp=array[j]
            array[j]=array[j+1]
            array[j+1]=temp;

        }
    }
    
}
for (let index = 0; index < array.length; index++) {
    console.log(array[index])
    
}
}
var arr3=[1,5,4,9,8,2]
maopao(arr3)


console.log("---------------2")


function maopao2(array){
    var isget=false
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j]>array[j+1]){
                isget=true
                var temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp;
              
            }
        }
        if(isget==true){
           isget=false
        }else{
            break
        }
    }
    
}

var arr4=[3,1,4,5]

maopao2(arr4)