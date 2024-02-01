# [Programmers - 120840] 구슬을 나누는 경우의 수

def solution(balls, share):
    answer = 0
    n = balls
    m = share
    nm = 1

    Num = 1  # 분자
    Den = 1  # 분모

    for i in range(n, 0, -1):
        Num *= i
    for i in range(n - m, 0, -1):
        nm *= i
    for i in range(m, 0, -1):
        Den *= i
    answer = Num // (nm * Den)

    return answer
'''
#   import math
#   return math.comb(balls, share)
'''
'''
def solution(balls, share):
    answer = factorial(balls) / (factorial(balls - share) * factorial(share))
    return answer

def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result
'''