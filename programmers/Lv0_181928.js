// [Programmers - 181928] 이어 붙인 수

function solution(num_list) {
    var answer = 0;
    var odd='',even='';
    
    for (let i=0;i<num_list.length;i++){
        if (num_list[i]%2==0){
            even+=(num_list[i]+'')
        }
        else{
            odd+=(num_list[i]+'')
        }
    }
    answer = Number(odd)+Number(even)
    
    return answer;
}

/* 
function solution(num_list) {
    const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
    return Number(odds.join('')) + Number(evens.join(''))
}


function solution(num_list) {
    const odd = [...(num_list+"")].map(x => Number(x)%2 === 1 ? x : "").join("")
    const even = [...(num_list+"")].map(x => Number(x)%2 === 0 ? x : "").join("")
    return Number(odd)+Number(even);
}


*/