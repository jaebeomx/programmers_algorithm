function solution(number) {
    let sum= number.split("").reduce((sum, item)=>sum+=(+item), 0);
    return sum%9;
}