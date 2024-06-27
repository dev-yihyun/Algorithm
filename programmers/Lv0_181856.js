// [Programmers - 181856] 배열 비교하기
function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length!==arr2.length){
        if(arr1.length>arr2.length){
            answer=1
        }else{
            answer=-1
        }
    }else{
        let sum1=0,sum2=0;
        for(let i=0;i<arr1.length;i++){
            sum1+=arr1[i]
        }
        for(let i=0;i<arr2.length;i++){
            sum2+=arr2[i]
        }
        if(sum1>sum2){
            answer=1
        }else if(sum1<sum2){
            answer=-1
            
        }else{
            
            answer=0
        }
    }
    return answer;
}

/* 
const solution = (arr1, arr2) => {
    return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
    if (option === "reduce") {
        a = a.reduce((acc, cur) => acc + cur);
        b = b.reduce((acc, cur) => acc + cur);
    }
    return a > b ? 1 : a < b ? -1 : 0;
};
*/