// [Programmers - 181849] 문자열 정수의 합

function solution(num_str) {
    var answer = 0;
    var arr = [...num_str]
    for(let i = 0;i<arr.length;i++){
        answer+=Number(arr[i])
    }
    return answer;
}

/* 
function solution(num_str) {
    return [...num_str].reduce((a, c) => a + +c, 0)
}
*/