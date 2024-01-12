# [Programmers - 120811] 중앙값 구하기

def solution(array):
    answer = 0
    array = sorted(array)
    answer = array[len(array)//2]
    return answer
#   return sorted(array)[len(array) // 2]