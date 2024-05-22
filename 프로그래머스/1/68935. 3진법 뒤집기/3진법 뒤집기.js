function solution(n) {
    var answer = [];
    let sum= 0;
    answer.unshift(n%3);

    while(n/3>=1){
        n= Number.parseInt(n/3);
        answer.unshift(n%3);
    }
    answer.reverse();
    console.log("answer: ",answer);
    
    for(let i=0; i<answer.length; i++){
        sum+=Math.pow(3,answer.length-(i+1))*answer[i];
    }
    return sum;
}