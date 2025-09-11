// [Programmers - 181936] 공배수

function solution(number, n, m) {
    var answer = 0;
    if(number%n==0 && number%m==0){
        return 1
    }
    return answer;
}

/* 
function solution(number, n, m) {
  return +!(number % n || number % m);
}
*/