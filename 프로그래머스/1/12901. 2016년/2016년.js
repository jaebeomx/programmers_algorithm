function solution(a, b) {
    // 윤년은 2월이 29일까지 있음
    const daysOfMonth= {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    const days= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let num= 5;
    if(a===1){
        num+=(b-2+1);
        return days[num%7];
    }else{
        for(let i=1; i<=a-1; i++){
        num+=daysOfMonth[i];
        }
        num+= b-1;
        return days[(num%7)];
    }
}