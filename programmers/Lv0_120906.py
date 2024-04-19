# [Programmers - 120906] 자릿수 더하기

def solution(n):
    answer = 0
    n = str(n)
    n = list(n)
    for i in n:
        answer+=int(i)
    return answer