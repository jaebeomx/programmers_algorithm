function solution(arr) {
    const height= arr.length;
    const width= arr[0].length;
    if(height===width){
        return arr;
    }else if(height>width){
        const count= height-width;
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<count; j++){
                arr[i].push(0);
            }
        }
    }
    else if(height<width){
        const count= width-height;
        for(i=0; i<count; i++){
            let newArr= new Array(width).fill(0);
            arr.push(newArr);
        }
    }
    return arr;
}