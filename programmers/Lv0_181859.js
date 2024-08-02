// [Programmers - 181859] 배열 만들기 6

function solution(arr) {
    var stk = [];
    let i=0;
    while(i<arr.length){
        if(stk.length === 0){
            stk.push(arr[i])
            i++;
        }
        else if(stk.length !==0 && stk[stk.length-1]===arr[i]){
            stk.pop()
            i++;
        }
        else if(stk.legnth!==0 && stk[stk.length-1]!==arr[i]){
            stk.push(arr[i])
            i++;
        }
    }
    if(stk.length === 0){return [-1]}
    return stk
    
}

/* 
function solution(arr) {
    let stk = []
    arr.forEach((x,i)=>{
        if( x !== stk[stk.length - 1]){
            stk.push(x)
        }else{
            stk.splice(-1)
        }
        //console.log("배열 추가 삭제 진행과정 : ",stk)
    })

    if(stk.length == 0){
        stk = [-1]
    }
    return stk;
}

function solution(arr) {
    let result=[];
    for (let i =0; i <arr.length; i++) {
        if (result[result.length-1] == arr[i]) {
            result.pop();
        } else {
            result.push(arr[i]);
        } 
    }

    return (result.length !== 0) ? result : [-1];  
} 
*/