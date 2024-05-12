function solution(cipher, code) {
    let count= 0;
    let arr= cipher.split("");
    let sol= [];
    for(let c of arr){
        count++;
        if(count==code){
            sol.push(c);
            count= 0;
        }
    }
    return sol.join("");
}