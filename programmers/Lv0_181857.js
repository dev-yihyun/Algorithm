// [Programmers - 181857] 배열의 길이를 2의 거듭제곱으로 만들기

function solution(arr) {
    var answer = [];
    var arrLength = arr.length;
    var exp = 0;
    while(Math.pow(2,exp)<arrLength){
        exp++;
    }
    var fillZero = Math.pow(2,exp)-arrLength;
    return arr.concat(Array(fillZero).fill(0));
}

/* 
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}
*/
/* 
const solution = (arr) => {
    let num = 1;
    while (arr.length > num){
        num *= 2;
    } 
    while(arr.length !== num){
        arr.push(0)
    }
    return arr;
}
*/
