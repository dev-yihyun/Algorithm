# [Programmers - 120894] 영어가 싫어요

def solution(numbers):
    answer = 0

    a = ["0","1","2","3","4","5","6","7","8","9"]
    b = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for i in range(10):
        numbers=numbers.replace(b[i],a[i])
    answer = int(numbers)
    return answer

'''
def solution(numbers):
    for num, eng in enumerate(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]):
        numbers = numbers.replace(eng, str(num))
    return int(numbers)
'''
'''
def solution(numbers):
    dic = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    i=0
    for word in dic:
        numbers = numbers.replace(word, str(i))
        i+=1
    return int(numbers)

'''