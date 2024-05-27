function solution(a, d, included) {
    let sum= 0;
    included.forEach((item, index)=>{
        if(item==true){
            sum= sum+(a+index*d);
        }
    })
    return sum;
}