# [Programmers - 120903] 배열의 유사도

def solution(s1, s2):
    answer = 0
    for i in s1:
        if s2.count(i):
            answer+=1
    return answer
#   return len(set(s1)&set(s2));