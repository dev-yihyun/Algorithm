// [Programmers - 181942] 문자열 섞기

function solution(str1, str2) {
    var answer = [];
    for (let i = 0;i<str1.length;i++){
        answer.push(str1[i])
        answer.push(str2[i])
    }
    answer = answer.join("")
    return answer;
}

/* 
function solution(str1, str2) {
    return [...str1].map((x, idx)=> x+str2[idx]).join("");
}
*/