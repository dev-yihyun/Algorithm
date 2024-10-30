// [Programmers - 181878] 원하는 문자열 찾기

function solution(myString, pat) {
    var answer = 0;
    answer = myString.toLowerCase().includes(pat.toLowerCase())?1:0;
    return answer;
}

/* 
function solution(myString, pat) {
    return myString.toUpperCase().includes(pat.toUpperCase())?1:0 
}
*/