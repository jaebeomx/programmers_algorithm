function solution(numer1, denom1, numer2, denom2) {
    // 공통 분모를 위해 denom1과 denom2의 최소공배수를 구하고 분자들을 이에 맞춘다
    
    let bigDenom;
    let bigNumer;
    let smallDenom;
    let smallNumer;
    
    if(denom2>denom1){
        bigDenom= denom2;
        bigNumer= numer2;
        smallDenom= denom1;
        smallNumer= numer1;
    }else{
        bigDenom= denom1;
        bigNumer= numer1;
        smallDenom= denom2;
        smallNumer= numer2;
    }
    let multipleCount= 1;
    
    while(1){
        if(bigDenom%smallDenom===0){
            bigNumer*=multipleCount;
            let count= bigDenom/smallDenom;
            smallNumer*=count;
            break;
        }else{
            bigDenom+=Math.max(denom1,denom2);
            multipleCount++;
        }
    }
    
    let finalNumer= bigNumer+smallNumer;
    let finalDenom= bigDenom;
    
    while(1){
        let cantDivide= true;
        let min= Math.min(finalNumer, finalDenom);
        for(let i=2; i<=min; i++){
            if(finalNumer%i===0 && finalDenom%i===0){
                finalNumer/=i;
                finalDenom/=i;
                cantDivide= false;
            }
        }
        if(cantDivide) break;
    }
    
    return [finalNumer, finalDenom];
}