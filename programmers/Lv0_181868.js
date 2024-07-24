// [Programmers - 181868] 공백으로 구분하기 2

function solution(my_string) {
    var answer = my_string.split(' ').filter(a=>a!=="")
    return answer;
}