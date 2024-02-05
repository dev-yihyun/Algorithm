# [Programmers - 120844] 배열 회전시키기

def solution(numbers, direction):
    answer = []
    if direction == "right":
        a = numbers.pop()
        numbers.insert(0,a)
    else:
        a = numbers.pop(0)
        numbers.append(a)
    answer = numbers
    return answer
#    return [numbers[-1]] + numbers[:-1] if direction == 'right' else numbers[1:] + [numbers[0]]