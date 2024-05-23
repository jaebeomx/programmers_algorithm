function solution(num_list) {
    let odd= "";
    let even= "";
    num_list.forEach((item)=>{
        if(item%2==0){
            even+=item;
        }else{
            odd+=item;
        }
    })
    return Number(odd)+Number(even);
}