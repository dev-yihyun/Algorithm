# [Programmers - 120862] 최댓값 만들기 (2)
def solution(numbers):
    answer = -999999999
    numbers = sorted(numbers)

    for i in range(len(numbers)):
        for j in range(i, len(numbers)):

            if numbers[i] * numbers[j] > answer:
                if i != j:
                    answer = numbers[i] * numbers[j]
    return answer
'''
    numbers = sorted(numbers)
    return max(numbers[0] * numbers[1], numbers[-1]*numbers[-2]) 
'''