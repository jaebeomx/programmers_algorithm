function solution(order) {
    let sum= 0;
    order.forEach((item)=>{
        if(item.includes("americano")){
            sum+=4500;
        }else if(item.includes("cafelatte")){
            sum+=5000;
        }else{
            sum+=4500;
        }
    })
    return sum;
}