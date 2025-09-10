// [Programmers - 181935] 홀짝에 따라 다른 값 반환하기

function solution(n) {
    var answer = 0;
    var sum=0
    if(n%2==1){ // 홀수
        for(let i=1;i<=n;i++){
            if (i%2==1){
                sum+=i
            }
        }
        return sum
    }else{ // 짝수
        for(let i=1;i<=n;i++){
            if (i%2==0){
                sum=sum+(i**2)
            }
        }
        return sum
    }
    return answer;
}

/* 
function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
}
*/