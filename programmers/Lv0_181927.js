// [Programmers - 181927] 마지막 두 원소


function solution(num_list) {
    var  answer = num_list;
    var a = num_list[num_list.length-1]
    var b = num_list[num_list.length-2]
    if (a>b){
        answer[answer.length] = a-b;
    }
   else{
       answer[answer.length] = a*2;
   }
    
    return answer;
}

/* 
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
*/