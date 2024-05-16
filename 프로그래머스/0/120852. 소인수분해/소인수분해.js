function solution(n) {
    let arr= [];
    while(n>=2){
        for(let i=2; i<=n; i++){
            if(n%i==0){
                arr.push(i);
                n/=i;
                break;
            }
        }
    }
    let noDuplication= new Set(arr);
    return [...noDuplication];
}