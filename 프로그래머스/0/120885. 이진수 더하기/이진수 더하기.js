function solution(bin1, bin2) {
    bin1= bin1.split("").reverse();
    bin2= bin2.split("").reverse();
    let valOne= 0;
    let valTwo= 0;
    bin1.forEach((item, index)=>{
        valOne+=(Math.pow(2,index)*(+item));
    })
    bin2.forEach((item, index)=>{
        valTwo+=(Math.pow(2,index)*(+item));
    })
    
    let sum= valOne+valTwo;
    return sum.toString(2);
    
}