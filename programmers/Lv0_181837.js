// [Programmers - 181837] 커피 심부름

function solution(order) {
    var answer = 0;
       
    for(let i=0;i<order.length;i++){
        if(order[i].includes("anything") || order[i].includes("americano")){
            answer+=4500
        }
        else if(order[i].includes("cafelatte")){
            answer+=5000
        }
    }
    
    return answer;
}