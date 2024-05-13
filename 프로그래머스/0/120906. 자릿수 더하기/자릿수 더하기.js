function solution(n) {
    let sum= 0;
    String(n).split("").forEach((item)=>sum+=Number(item));
    return sum;
}