// [Programmers - 181909] 접미사 배열

function solution(my_string) {
    var answer = [];
    for(let i = 0;i<my_string.length;i++){
        answer.push(my_string.slice(i))
    }
    answer.sort()
    return answer;
}

/* 
function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}
*/