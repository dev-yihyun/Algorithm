// [Programmers - 181852] 뒤에서 5등 위로

function solution(num_list) {
    var answer = [];
    answer=num_list.sort((a,b)=>a-b).splice(5)
    
    return answer;
}

/* 
function solution(num_list) {
    var answer = [];
    return answer = num_list.sort((a, b) => {return a - b;}).slice(5);
}
*/