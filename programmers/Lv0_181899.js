// [Programmers - 181899] 카운트 다운

function solution(start, end_num) {
    var answer = [];
    for(let i = start;i>=end_num;i--){
        answer.push(i)
    }
    return answer;
}

/* const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i); */
/* 
function solution(start, end) {
    var answer = [];

    for(let i = start; i>=end; i--){
        answer.push(i)
    }

    return answer;
}
*/