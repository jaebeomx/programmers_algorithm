function solution(names) {
    let arr= [];
    for(let i=0; i<=names.length; i+=5){
        names[i] && arr.push(names[i])
    }
    return arr;
}