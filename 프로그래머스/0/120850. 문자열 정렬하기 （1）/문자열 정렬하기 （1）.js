function solution(my_string) {
    let arr= my_string.split("").filter(item=> !isNaN(Number(item)));
    for(let i=0; i<arr.length; i++){
        arr[i]= +arr[i];
    }
    return arr.sort();
}