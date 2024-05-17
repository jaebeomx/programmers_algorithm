function solution(numbers) {
    let arr= [0,1,2,3,4,5,6,7,8,9];
    numbers.map((item)=>{
        let idx= arr.findIndex((element)=>element==item);
        arr.splice(idx,1);
    })
    return arr.reduce((sum,item)=>sum+item, 0);
}