function solution(a, b) {
    if(a==b){
        return a;
    }
    let max= a>b?a:b;
    let min= a>b?b:a;
    
    let sum= 0;
    
    for(let i=min; i<=max; i++){
        sum+=i;
    }
    return sum;
}