# [Programmers - 120904] 숫자 찾기
def solution(num, k):
    answer = 0
    line = list(map(int,str(num)))
    print(line)
    if line.count(k)==0:
        return -1
    else:
        return line.index(k)+1
    return answer

#   return -1 if str(k) not in str(num) else str(num).find(str(k)) + 1