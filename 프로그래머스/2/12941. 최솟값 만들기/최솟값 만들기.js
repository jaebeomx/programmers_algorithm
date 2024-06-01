function solution(A,B){
    let sum= 0;
    let length= A.length;
    A.sort((a,b)=>b-a); // 내림차순 정렬
    B.sort((a,b)=>a-b); // 오름차순 정렬
    
    for(let i=0; i<length; i++){
        sum+= A.pop()*B.pop();
    }
    
    return sum;
}
