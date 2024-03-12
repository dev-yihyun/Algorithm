# [Programmers - 120885] 이진수 더하기
def solution(bin1, bin2):
    answer = ''
    answer = int(bin1,2) + int(bin2,2)
    answer = list(bin(answer))
    answer.pop(0)
    answer.pop(0)
    answer = "".join(answer)
    return answer
#   answer = bin(int(bin1,2) + int(bin2,2))[2:]