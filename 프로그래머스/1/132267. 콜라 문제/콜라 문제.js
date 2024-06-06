function solution(a, b, n) {
    let cokeCount= 0;
    while(n/a>=1){
        cokeCount+=b*parseInt(n/a);
        n= b*parseInt(n/a)+n%a;
    }
    return cokeCount;
}