function solution(num_list) {
    let listLength= num_list.length;
    if(num_list[listLength-1]>num_list[listLength-2]){
        num_list.push(num_list[listLength-1]-num_list[listLength-2]);
    }else{
        num_list.push(num_list[listLength-1]*2);
    }
    return num_list;
}