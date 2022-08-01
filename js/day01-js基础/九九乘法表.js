var str=''
for (let index = 1; index <=10; index++) {
    for (let index1 = 1; index1 <=index; index1++) {
      str+=index1+'*'+index+'='+index*index1+'\t';
    }
    str+='\n';
    
}
console.log(str)

