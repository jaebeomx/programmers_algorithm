function isPrime(num){
    for(let i=2; i<num; i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(nums) {
    let result= 0;
    function DFS(start, level, sum){
        if(level===3){
            if(isPrime(sum)) result++;
            return;
        }else{
            for(let i=start; i<nums.length; i++){
                DFS(i+1, level+1, sum+nums[i]);
            }
        }
    }
    DFS(0,0,0);
    return result;
    
}