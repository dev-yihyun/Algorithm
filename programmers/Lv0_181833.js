// [Programmers - 181833] 특별한 이차원 배열 1
function solution(n) {
    var answer=Array.from({ length: n }, () => Array(n).fill(0));
    for(let i=0;i<n;i++){
        for(let j=i;j<i+1;j++){
            answer[i][j]=1
        }
    }
    return answer;
}

/* 
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
*/