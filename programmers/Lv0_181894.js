// [Programmers - 181894] 2의 영역

function solution(arr) {
    var answer = [];
    var two = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===2){
            two.push(i)
        }
    }
    console.log(two)
    if(two.length ===0){
        answer.push(-1)
    }
    else if(two.length ===1){
        answer.push(arr[two[0]])
    }
    else{
        answer=arr.slice(two[0],two.pop()+1)
    }
    return answer;
}

/* 
function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}
*/