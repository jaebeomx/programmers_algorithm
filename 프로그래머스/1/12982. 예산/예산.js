function solution(d, budget) {
    let count= 0;
    d.sort((a,b)=>a-b).forEach((item)=>{
        if(budget-item>=0){
            budget-=item;
            count+=1;
        }
    })
    return count;
}