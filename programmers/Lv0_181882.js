// [Programmers - 181882] 조건에 맞게 수열 변환하기 1
function solution(arr) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=50 &&arr[i]%2==0){
            arr[i] = arr[i]/2
        }else if(arr[i]<=50 &&arr[i]%2==1){
            arr[i]=arr[i]*2
        }
    }
    answer = arr
    return answer;
}

/* const solution=a=>a.map(v=>v>=50&&v%2==0?v/2:v<50&&v%2==1?v*2:v) */