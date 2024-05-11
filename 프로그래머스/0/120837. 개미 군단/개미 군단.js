function solution(hp) {
    let count= 0;
    
    if(hp/5>=1){
        count+=~~(hp/5);
        hp%=5;
    }
    
    if(hp/3>=1){
        count+=~~(hp/3);
        hp%=3;
    }
    count+=hp;
    
    return count;
}