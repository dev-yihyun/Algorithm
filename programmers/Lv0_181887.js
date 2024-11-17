// [Programmers - 181887] 홀수 vs 짝수

function solution(num_list) {
    var answer = 0;
    var odd=0
    var even=0
    for(let i=0;i<num_list.length;i++){
        if(i%2===0){
            even=even+num_list[i]
        }else{
            
            odd=odd+num_list[i]
        }
    }
    answer = odd>even?odd:even
    return answer;
}

/* 
function solution(num_list) {
    let even = 0;
    let odd = 0

    num_list.map((v, idx) => {
        !(idx % 2) ? even += v : odd += v; 
    })

    return odd > even ? odd : even; 
}
*/