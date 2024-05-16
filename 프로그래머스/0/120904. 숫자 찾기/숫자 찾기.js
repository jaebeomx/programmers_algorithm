function solution(num, k) {
    let idx= (num).toString().split("").findIndex(item=>Number(item)==k);
    return idx>=0?idx+1:-1;
}