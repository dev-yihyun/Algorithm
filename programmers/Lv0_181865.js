// [Programmers - 181865] 간단한 식 계산하기

function solution(binomial) {
    var answer = 0;
    var binomial = binomial.split(" ")
    var a = Number(binomial[0])
    var op = binomial[1]
    var b = Number(binomial[2])
    switch(op){
        case "+":
            return a+b;
            break;
        case "-":
                        return a-b;
            break;
        case "*":
                        return a*b;
            break;
            
    }
    return answer;
}

/* 
const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}


function solution(binomial) {
    const [a,ex,b] = binomial.split(" ");    
    return (ex === "+")? +a+ +b : (ex === "-")? a - b : a*b
}
*/