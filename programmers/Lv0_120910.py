# [Programmers - 120910] 세균 증식
def solution(n, t):
    answer = n
    for i in range(t):
        answer *=2
    return answer
#   return n << t
#   answer = 2**t * n