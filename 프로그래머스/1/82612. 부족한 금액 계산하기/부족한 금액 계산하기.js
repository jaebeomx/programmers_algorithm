function solution(price, money, count) {
    let needMoney= 0;
    for(let i=1; i<=count; i++){
        needMoney+=price*i;
    }
    return money-needMoney>0?0:needMoney-money;
}