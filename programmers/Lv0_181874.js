// [Programmers - 181874] A 강조하기
function solution(myString) {
    var answer = '';
    myString=[...myString]
    for(let i=0;i<myString.length;i++){
        if(myString[i]==='a' || myString[i]==='A'){
            myString[i]='A'
        }else if(myString[i]===myString[i].toUpperCase()){
            myString[i]=myString[i].toLowerCase()
        }
    }
    answer = myString.join("")
    return answer;
}

/* const solution=s=>s.toLowerCase().replaceAll('a','A'); */