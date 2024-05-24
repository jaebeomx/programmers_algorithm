function solution(arr1, arr2) {
    if(arr1.length===arr2.length){
        let arr1Sum= arr1.reduce((sum,item)=>sum+item,0);
        let arr2Sum= arr2.reduce((sum,item)=>sum+item,0);
        if(arr1Sum===arr2Sum){
            return 0;
        }else if(arr1Sum>arr2Sum){
            return 1;
        }else{
            return -1;
        }
    }else{
        return (arr1.length>arr2.length)?1:-1;
    }
}