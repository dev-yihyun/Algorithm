// [Programmers - 181879] 길이에 따른 연산

function solution(num_list) {
    var answer = 0;
    if(num_list.length>=11){
        for(let i =0;i<num_list.length;i++){
            answer+=num_list[i]
        }
    }
    else if(num_list.length<=10){
        answer = num_list[0]
        for(let i =1;i<num_list.length;i++){
            answer*=num_list[i]
        }
        console.log(answer)
    }
    return answer;
}