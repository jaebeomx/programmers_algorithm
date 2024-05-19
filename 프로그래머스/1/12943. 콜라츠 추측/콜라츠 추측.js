function solution(num) {
    let count= 0;
    let val= num;
    
    while(val!=1){
        if(val%2==0){
            val/=2;
            count+=1;
        }else{
            val= 3*val+1;
            count+=1;
        }
        if(count>500){
            return -1;
        }
    }
    return count;
}