function solution(arr, delete_list) {
    for(let i=0; i<delete_list.length; i++){
        let idx= arr.findIndex((item)=>item==delete_list[i]);
        if(idx=== -1){
            continue;
        }else{
            arr.splice(idx,1);
        }
    }
    return arr;
}