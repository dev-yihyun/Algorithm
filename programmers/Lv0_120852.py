# [Programmers - 120852] 소인수분해

def solution(n):
    answer = []
    i =2
    while i <= n:
        if n%i == 0:
            if answer.count(i) == 0:
                answer.append(i)
                n = n//i
                i=2
                continue
            n=n//i
            i=2
            continue
        i = i+1
    return answer
#
'''
def solution(n):
    answer = []
    d = 2
    while d <= n:
        if n % d == 0:
            n /= d
            if d not in answer:
                answer.append(d)
        else:
            d += 1
    return answer
'''