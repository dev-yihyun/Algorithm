// [Programmers - 181881] 조건에 맞게 수열 변환하기 2

function solution(arr) {
    var answer = 0;
    var beforArr = [...arr];
    var cnt = 0;
    console.log(beforArr);
    while(cnt!==arr.length){
        cnt =0;
        beforArr = [...arr]
        for(let i = 0;i<arr.length;i++){
            if(arr[i]>=50 && arr[i]%2===0){
                arr[i] = arr[i]/2
            }
            else if(arr[i]<50 && arr[i]%2===1){
                arr[i] = arr[i]*2+1
            } 
            if(arr[i]=== beforArr[i]) cnt++;
        }
        answer++;
    }

    //console.log(arr)
    return answer-1;
}

// 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
// 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.