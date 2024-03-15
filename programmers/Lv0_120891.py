# [Programmers - 120891] 369게임

def solution(order):
    answer = 0
    line = list(str(order))
    print(line)
    for i in line:
        if int(i) == 3:
            answer+=1
        elif int(i) == 6:
            answer+=1
        elif int(i) == 9:
            answer+=1
    return answer
#    return sum(map(lambda x: str(order).count(str(x)), [3, 6, 9]))
'''
def solution(order):
    answer = 0
    order = str(order)
    return order.count('3') + order.count('6') + order.count('9')
'''