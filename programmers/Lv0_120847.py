# [Programmers - 120847] 최댓값 만들기 (1)

def solution(numbers):
    answer = 0
    numbers = sorted(numbers)
    answer = numbers[len(numbers)-1] * numbers[len(numbers)-2]
    # numbers[-2] * numbers[-1]
    return answer