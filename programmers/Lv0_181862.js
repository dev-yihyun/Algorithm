// [Programmers - 181862] 세 개의 구분자

function solution(myStr) {
    var answer = [];
    var Str = ""
    var myStr = [...myStr];
    console.log(myStr)
    for(let i=0;i<myStr.length;i++){
        if(myStr[i]==="a" || myStr[i]==="b" ||myStr[i]==="c"){
           if(Str!==""){
               answer.push(Str)
               Str=""
           }
        }else{
            Str+=myStr[i];
        }
    }
    if(Str!==""){
        answer.push(Str)
    }
    if(answer.length===0){
        answer.push("EMPTY")
    }
    
    console.log(myStr)
    return answer;
}

/* const solution=s=>s.match(/[^a-c]+/g)||['EMPTY'] */

