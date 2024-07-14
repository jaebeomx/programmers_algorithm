function getMeasure(num, memo){
    if(memo[num]!==undefined){
        return memo[num];
    }
    
    let count= 0;
    for(let i=1; i*i<=num; i++){
        if(num%i===0){
            count++;
            if(i!==num/i){
                count++;
            }
        }
    }
    memo[num]= count;
    return count;
}

function solution(number, limit, power) {
    let iron= 0;
    let memo= {};
    
    for(let i=1; i<=number; i++){
        let measure= getMeasure(i, memo);
        if(measure<=limit) iron+=measure;
        else iron+=power;
    }
    return iron;
}