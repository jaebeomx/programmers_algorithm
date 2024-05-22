function solution(chicken) {
    let count= 0;
    while(chicken/10>=1){
        count+=Number.parseInt(chicken/10);
        chicken= Number.parseInt(chicken/10)+chicken%10;
    }
    return count;
}
