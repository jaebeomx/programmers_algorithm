function solution(arr) {
    let newArr= [];
    arr.forEach((item)=>{
        for(let i=0; i<item; i++){
            newArr.push(item);
        }
    })
    return newArr;
}