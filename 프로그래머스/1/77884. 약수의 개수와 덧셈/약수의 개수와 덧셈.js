function solution(left, right) {
    let evenArr= [];
    let oddArr= [];
    let count= 0;
    
    for(let i=left; i<=right; i++){
        for(let j=1; j<=i; j++){
            if(i%j==0){
                count+=1;
            }
        }
        if(count%2==0){
                evenArr.push(i);
            }else{
                oddArr.push(i);
            }
            count= 0;
    }
    let evenSum= evenArr.reduce((sum,item)=>sum+item,0);
    let oddSum= oddArr.reduce((sum,item)=>sum+item,0);
    
    return evenSum-oddSum;
}