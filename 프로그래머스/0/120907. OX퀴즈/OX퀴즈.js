function solution(quiz) {
    return quiz.map((item)=>{
        let [expression, answer]= item.split(/[=]/);
        answer= +answer.trim();
        expression= expression.trim().split(" ");
        let myAnswer= 0;
        if(expression[1]=="-"){
            myAnswer= (+expression[0])-(+expression[2]);
        }else if(expression[1]=="+"){
            myAnswer= (+expression[0])+(+expression[2]);
        }
        return myAnswer==answer?"O":"X";
    })
}