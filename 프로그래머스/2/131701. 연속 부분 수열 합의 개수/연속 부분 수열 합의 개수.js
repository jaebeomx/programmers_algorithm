function solution(elements) {
    const length= elements.length;
    const extendElements= elements.concat(elements);
    const sums= new Set();
    
    for(let size= 1; size<=length; size++){
        for(let start= 0; start<length; start++){
            let sum= 0;
            for(let i=0; i<size; i++){
                sum+=extendElements[start+i];
            }
            sums.add(sum);
        }
    }
    return sums.size;
}