function solution(todo_list, finished) {
    return todo_list.filter((item, index)=>{
        if(finished[index]==false){
            return item;
        }
    })
}