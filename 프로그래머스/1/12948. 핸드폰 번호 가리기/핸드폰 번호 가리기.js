function solution(phone_number) {
    let personalInfo= "*".repeat(phone_number.length-4);
    return personalInfo+phone_number.slice(phone_number.length-4);
}