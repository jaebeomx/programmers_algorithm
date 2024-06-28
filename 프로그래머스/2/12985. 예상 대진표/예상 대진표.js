function solution(n,a,b){
    let small= Math.min(a,b);
    let big= Math.max(a,b);
    
    let count= 0;
    
    // 1차이 이면서도 small이 짝수번째여야함
    while(small!==big){
        small= Math.ceil(small/2);
        big= Math.ceil(big/2);
        count++;
    }
    return count;
}