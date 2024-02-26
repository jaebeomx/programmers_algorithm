function solution(n) {
    let i= 1;
    while(~~(n/i)>=1){
        n= ~~(n/i);
        if(~~(n/(i+1))<1){
            return i;
        }
        i++;
    }
    return i;
}