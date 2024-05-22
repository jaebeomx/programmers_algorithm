function solution(arr1, arr2) {
    let arr= [];
    for(let i=0; i<arr1.length; i++){
        arr.push(arr1[i].map((item, index)=>{
            return item+arr2[i][index];
        }))
    }
    return arr;
}