function solution(n, arr1, arr2) {
    // 1은 #, 0은 0을 의미
    return arr1.map((item, index)=>{
        let map1= item.toString(2).padStart(n,"0").split("").map(Number);
        let map2= arr2[index].toString(2).padStart(n,"0").split("").map(Number);
        
        let arr= new Array(n).fill(0);
        for(let i=0; i<map1.length; i++){
            if(map1[i] || map2[i]) arr[i]= "#";
            else arr[i]= " ";
        }
        
        return arr.join("");
    })
}