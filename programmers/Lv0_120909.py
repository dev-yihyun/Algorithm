# [Programmers - 120909] 제곱수 판별하기

import math
def solution(n):
    answer = 0
    a = int(math.sqrt(n))
    if a**2 == n:
        answer=1
    else:
        answer = 2
    return answer