# [Programmers - 120815] 피자 나눠 먹기 (2)

def solution(n):
    answer = 0
    for i in range(2,n*6+1):
        if i%n == 0 and i%6 == 0:
            answer = i//6
            break
    return answer
#   return (n * 6) // math.gcd(n, 6) // 6