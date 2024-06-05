function solution(number) {
    let count= 0;
    while(number.length>=3){
        const pop= number.pop();
        for(let i=0; i<number.length-1; i++){
            for(let j=i+1; j<number.length; j++){
                if(pop+number[i]+number[j]==0){
                    count++;
                }
            }
        }
    }
    return count;
}