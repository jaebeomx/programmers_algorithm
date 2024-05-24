function solution(a, b) {
    let str= "";
    str= str+a+b;
    return Number(str)>2*a*b?Number(str):2*a*b;
}