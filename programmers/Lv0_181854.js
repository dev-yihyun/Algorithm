// [Programmers - 181854] 배열의 길이에 따라 다른 연산하기

function solution(arr, n) {
    var answer = [];
    if(arr.length%2==0){
        for(let i=0;i<arr.length;i++){
            if(i%2==1){
                answer.push(arr[i]+n)
            }else{
                answer.push(arr[i])
            }
        }
    }else{
        for(let i=0;i<arr.length;i++){
            if(i%2==0){
                answer.push(arr[i]+n)
            }else{
                answer.push(arr[i])
            }
        }
    }
    return answer;
}

/* 
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
    ? num + n
    : num
))
*/