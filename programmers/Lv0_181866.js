// [Programmers - 181866] 문자열 잘라서 정렬하기

function solution(myString) {
    var answer = myString.split('x').filter(item => item !== "").sort();
    return answer;
}