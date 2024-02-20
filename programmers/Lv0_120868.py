# [Programmers - 120868] 삼각형의 완성조건 (2)

def solution(sides):
    answer = 0
    sides.sort()
    a,b=sides[0],sides[1]
    # b가 가장 긴 선분인 경우
    for i in range(1,b+1):
        if a+i>b:
            answer+=1
    # c가 가장 긴 선분인 경우
    for i in range(b+1,a+b):
        answer+=1
    return answer
#    return sum(sides) - max(sides) + min(sides) - 1
#   return 2 * min(sides) - 1