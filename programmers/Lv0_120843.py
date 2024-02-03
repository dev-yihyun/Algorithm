# [Programmers - 120843] 공 던지기

def solution(numbers, k):
    answer = 0
    j=0
    for i in range(0,k):
        if j>len(numbers):
            j=j-len(numbers)
        j = j+2
    answer = numbers[j-2]
    return answer

#   return numbers[2 * (k - 1) % len(numbers)]
#   return 2 * (k - 1) % numbers[-1] + 1