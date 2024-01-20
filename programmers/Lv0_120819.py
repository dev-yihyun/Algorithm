# [Programmers - 120819] 아이스 아메리카노
def solution(money):
    answer = []
    answer.append(money//5500)
    answer.append(money%5500)
    return answer
#   return [money // 5500, money % 5500]