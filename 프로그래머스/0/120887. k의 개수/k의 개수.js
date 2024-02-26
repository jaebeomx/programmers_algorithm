function solution(i, j, k) {
    let count= 0;
    for(let num= i;num<= j;num++){
        num.toString().split("").forEach((item)=>{
            if(item==`${k}`){
                count+=1;
            }
        })
    }
    return count;
}