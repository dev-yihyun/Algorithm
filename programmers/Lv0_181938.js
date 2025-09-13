// [Programmers - 181938] 두 수의 연산값 비교하기


function solution(a, b) {
    var answer = 0;
    var tmp1 = a+""
    var tmp2 = b+""
    answer = Math.max(Number(a+""+b),2*a*b)
    return answer;
}

/* 
function solution(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}
*/