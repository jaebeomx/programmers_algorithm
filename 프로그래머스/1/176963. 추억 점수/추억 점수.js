function solution(name, yearning, photo) {
    let missPoint= new Map();
    
    for(let i=0; i<name.length; i++){
        missPoint.set(name[i], yearning[i]);
    }
    
    return photo.map((item)=>{
        let sum= 0;
        item.forEach((friend)=>{
            sum+=(missPoint.get(friend)||0);
        })
        return sum;
    })
}