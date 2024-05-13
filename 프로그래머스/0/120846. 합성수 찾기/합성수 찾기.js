function solution(n) {
    
    if(n<=3){
        return 0;
    }
    
    let count= 0;
    
    for(let i=4; i<=n; i++){
        for(let j=2; j<i; j++){
            if(i%j==0){
                count+=1;
                break;
            }
        }
    }
    return count;
}