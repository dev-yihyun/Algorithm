// [Programmers - 181898] 가까운 1 찾기

function solution(arr, idx) {
    var answer = 0;
    for(let i = 0;i<arr.length;i++){
        if(i>=idx && arr[i]===1){
            answer = i
            break
        }else{answer =-1}
    }
    
    return answer;
}

/* const solution=(a,i)=>a.indexOf(1,i); */