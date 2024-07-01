// [Programmers - 181860] 빈 배열에 추가, 삭제하기

function solution(arr, flag) {
    var answer = [];
    for(let i=0;i<flag.length;i++){
        if(flag[i]){//true
            for(let j=0;j<arr[i];j++){
                answer.push(arr[i])
                answer.push(arr[i])
            }
        }else{//false
            for(let j=0;j<arr[i];j++){
                answer.pop(arr[i])
            }
        }
    }
    return answer;
}

/* 
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    [],
  );
}
*/