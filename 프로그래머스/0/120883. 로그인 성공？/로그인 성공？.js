function solution(id_pw, db) {
    let [id, pw]= id_pw;
    let idx= db.findIndex((item)=>item[0]==id);
    
    if(idx<0){
        return "fail"
    }
    
    if(pw==db[idx][1]){
        return "login"
    }else{
        return "wrong pw"
    }
}