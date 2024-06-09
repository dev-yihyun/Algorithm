// [Programmers - 181835] 조건에 맞게 수열 변환하기 3
function solution(arr, k) {
    var answer = [];
    if(k%2==1){
        for(let i=0;i<arr.length;i++){
            arr[i]*=k;
        }
    }else{
        for(let i=0;i<arr.length;i++){
            arr[i]+=k;
        }
    }
    answer = arr;
    return answer;
}

/* const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k) */