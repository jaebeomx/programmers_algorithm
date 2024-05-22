function solution(sizes) {
    let maxWidth= 0;
    let maxHeight= 0;
    
    for(let i=0; i<sizes.length; i++){
        let [width, height]= sizes[i];
        let minSize= Math.min(width, height);
        if(minSize>maxWidth){
            maxWidth= minSize;
        }
        let maxSize= Math.max(width, height);
        if(maxSize>maxHeight){
            maxHeight= maxSize;
        }
    }
    return maxWidth*maxHeight;
}