function solution(n) {
    let num= Math.ceil(Math.sqrt(n));
    return num*num==n?1:2;
}