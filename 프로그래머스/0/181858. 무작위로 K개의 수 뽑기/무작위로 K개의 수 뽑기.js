function solution(arr, k) {
    let slice= arr.slice(0,k);
    let set= new Set(slice);
    if(set.size===k) return [...set];
    
    let newArr= [];
    let count= 0;
    for(let i=0; i<arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
            count+=1;
            if(count==k){
                return newArr;
            }
        }
    }
    let leftCount= k-count;
    for(let i=0; i<leftCount; i++){
        newArr.push(-1);
    }
    return newArr;
}