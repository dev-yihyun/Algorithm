# [Programmers - 120834] 외계행성의 나이

def solution(age):
    answer = ''
    alpha = [chr(c) for c in range(97,123)]
    strage = list(str(age))
    for i in range(len(strage)):
        answer += alpha[int(strage[i])]
    return answer
#   return ''.join([chr(int(i)+97) for i in str(age)])