function solution(n) {
    if(n/7>=1){
        return (n%7>0?Math.floor(n/7)+1:Math.floor(n/7));
    }else{
        return 1;
    }
}