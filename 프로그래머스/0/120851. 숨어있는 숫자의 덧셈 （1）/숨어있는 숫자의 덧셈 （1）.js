function solution(my_string) {
    let num= ["1","2","3","4","5","6","7","8","9"];
    let sum= 0;
    
    for(let i of my_string){
        if(num.includes(i)){
            sum+=parseInt(i);
        }
    }
    return sum;
}