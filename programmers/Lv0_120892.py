# [Programmers - 120892] 암호 해독

def solution(cipher, code):
    answer = ''
    for i in range(code-1,len(cipher),code):
        answer+=cipher[i]
    return answer
#   answer = cipher[code-1::code]