// [Programmers - 181920] 카운트 업

function solution(start_num, end_num) {
    var answer = [];
    for(let i = start_num;i<=end_num;i++){
        answer.push(i)
    }
    return answer;
}

/* 
function solution(start, end) {
    idx = start;
    return Array.from({length: end-start+1}, ()=> {return start++});
}
*/