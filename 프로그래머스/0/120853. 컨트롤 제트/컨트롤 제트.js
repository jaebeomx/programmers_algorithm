function solution(s) {
    let arr= s.split(" ");
    let result= 0;
    let memoryNumber= 0;
    
    for(let i= 0; i<arr.length; i++){
        if(arr[i]=="Z"){
            result-=memoryNumber;
            continue;
        }else{
            memoryNumber= (+arr[i]);
        }
        result+=(+arr[i]);
    }
    return result;
}