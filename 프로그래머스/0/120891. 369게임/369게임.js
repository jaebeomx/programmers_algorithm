function solution(order) {
    let count= 0;
    let arr_order= order.toString().split("");
    for(item of arr_order){
        if (Number(item)!=0 && Number(item)%3==0){
            count+=1;
        }
    }
    return count;
    
}