function solution(numbers) {
    let maxWithPlus= 0;
    let maxWithMinus= 0;
    
    let filterNegative= numbers.filter((item)=>item<0).sort((a,b)=>a-b);

    numbers.sort((a,b)=>b-a);
    numbers.splice(-filterNegative.length, filterNegative.length);
    
    console.log("filterNegative: ", filterNegative);
    console.log("numbers: ", numbers);
    
    if(filterNegative.length==1 && numbers.length==1){
        return numbers[0]*filterNegative[0];
    }
    
    maxWithMinus= filterNegative.length>=2?(filterNegative[0]*filterNegative[1]):0;
    maxWithPlus= numbers.length>=2?(numbers[0]*numbers[1]):0;
    
    return maxWithMinus>maxWithPlus?maxWithMinus:maxWithPlus;
}