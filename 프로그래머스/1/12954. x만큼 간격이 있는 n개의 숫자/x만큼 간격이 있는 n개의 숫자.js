function solution(x, n) {
    let num= x;
    let arr= [];
    for(let i=1; i<=n; i++){
        arr.push(x);
        x+=num;
    }
    return arr;
}