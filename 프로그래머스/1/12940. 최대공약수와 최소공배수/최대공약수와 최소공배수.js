function solution(n, m) {
    let small= n>m?m:n;
    let big= n>m?n:m;
    let maxGongYak= 0;
    let minGongBae= 0;
    
    for(let i=small; i>=1; i--){
        if(small%i==0 && big%i==0){
            maxGongYak= i;
            break;
        }
    }
    for(let i=big; ; i+=big){
        if(i%small==0 && i%big==0){
            minGongBae= i;
            break;
        }
    }
    return [maxGongYak, minGongBae];
}