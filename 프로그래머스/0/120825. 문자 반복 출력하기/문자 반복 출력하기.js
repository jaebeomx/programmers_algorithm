function solution(my_string, n) {
    let arr= [];
    for(i of my_string){
        for(let j=1; j<=n; j++){
            arr.push(i);
        }
    }
    return arr.join("");
}