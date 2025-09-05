// [Programmers - 181929] 원소들의 곱과 합

function solution(num_list) {
    var answer = 0;
    var sum=0,mul=1;
    for (let i = 0;i<num_list.length;i++){
        mul*=num_list[i]
        sum+=num_list[i]
    }
    
    if(mul<sum**2){
        answer = 1
    }else{
        answer = 0
    }
    return answer;
}

/* 
function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
}
*/