function solution(nums) {
    let maxNum= nums.length/2;
    let set= new Set(nums);
    if(maxNum>set.size){
        return set.size;
    }else if(maxNum<set.size){
        return maxNum;
    }else{
        return maxNum;
    }
}