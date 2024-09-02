// [Programmers - 181858] 무작위로 K개의 수 뽑기
function solution(arr, k) {
    var answer = [];
    answer.push(arr[0]);
    let i = 1;
    while(i!==arr.length){
        if(answer.length===k){return answer}
        if(!answer.includes(arr[i])){
             answer.push(arr[i]);
        }
        i++;
    }
    
    while(answer.length<k){answer.push(-1)}
    return answer;
}

/* 
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}
 */