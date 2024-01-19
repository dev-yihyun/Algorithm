# [Programmers - 120816] 피자 나눠 먹기 (3)
def solution(slice, n):
    answer = 0
    if n%slice !=0:
        answer = n//slice+1
    elif n%slice == 0:
        answer = n//slice
    return answer