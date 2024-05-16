function solution(n) {
    for(let i=6; ; i+=6){
        if(i>=n && i%n==0){
            return i/6;
        }
    }
}