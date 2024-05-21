function solution(arr, intervals) {
    let [arr1, arr2]= intervals;
    return [...arr.slice(arr1[0],(arr1[1]+1)), ...arr.slice(arr2[0], (arr2[1]+1))];
}