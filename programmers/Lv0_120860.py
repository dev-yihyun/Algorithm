# [Programmers - 120860] 직사각형 넓이 구하기
def solution(dots):
    answer = 0
    x1,y1 = max(dots)
    x2,y2 = min(dots)
    answer = (x1-x2)*(y1-y2)
    return answer
#   return (max(dots)[0] - min(dots)[0])*(max(dots)[1] - min(dots)[1])