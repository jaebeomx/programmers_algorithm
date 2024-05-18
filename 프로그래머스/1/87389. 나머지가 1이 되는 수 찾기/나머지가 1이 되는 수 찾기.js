function solution(n) {
    let temp= n;
    for(let i=2; i<n; i++){
        if(n%i==1 && i<temp){
            temp= i;
        }
    }
    return temp;
}