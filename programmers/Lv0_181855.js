// [Programmers - 181855] 문자열 묶기
function solution(strArr) {
    var answer = 0;
    const arrCount = Array(strArr.length).fill(0);
    for(let i = 0;i<strArr.length;i++){
        arrCount[strArr[i].length]++;
    }
    answer = Math.max(...arrCount)
    return answer;
}

/* 
function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }
  return Math.max(...counter.values());
}

function solution(strArr) {
    let ans = Array(31).fill(0);
    for (let s of strArr) ans[s.length]++
    return Math.max(...ans)
}
*/