function solution(numbers) {
    let max1= numbers[0];
    let max2= 0;
    
    for(let i=1; i<numbers.length; i++){
        max2= numbers[i]>max2?numbers[i]:max2;
        if(max2>max1){
            let temp= max1;
            max1= max2;
            max2= temp;
        }
    }
    return max1*max2;
}