function solution(my_string) {
    let arr= [];
    my_string= my_string.split("");
    let length= my_string.length;
    for(let i=0; i<=length-1; i++){
        let tempArr= my_string.slice(i,length)
        arr.push(tempArr.join(""));
    }
    return arr.sort();
}