// [Programmers - 181926] 수 조작하기 1

function solution(n, control) {
    var answer = n;
    for (let i = 0;i<control.length;i++){
        switch(control[i]){
            case "w":
                answer+=1
                break;
            case "s":
                answer-=1
                break;
            case "d":
                answer+=10
                break;
            case "a":
                answer-=10
                break;
        }
    }
    
    return answer;
}

/* 
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
*/