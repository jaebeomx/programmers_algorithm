function solution(num, total) {
    let arr= [];
    let start;
    if(num%2===0){
        start= Math.floor(total/num)-(num/2-1)
    }else{
        start= Math.floor(total/num)-Math.floor(num/2);
    }
    
    for(let i=0; i<num; i++){
            arr.push(start);
            start++;
        }
    
    return arr;
}