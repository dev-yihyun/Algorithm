# [Programmers - 120905] n의 배수 고르기

def solution(n, numlist):
    answer = []
    for i in numlist:
        if i%n==0:
            answer.append(i)
    return answer
#   return list(filter(lambda v: v%n==0, numlist))