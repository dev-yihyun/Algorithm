// [Programmers - 181940] 문자열 곱하기

function solution(my_string, k) {
    var answer = '';
    for(let i=0;i<k;i++){
        answer+=my_string
    }
    return answer;
}

/* 
function solution(my_string, k) {
    return my_string.repeat(k)
}
*/