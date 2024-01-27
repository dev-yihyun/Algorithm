# [Programmers - 120835] 진료 순서 정하기

def solution(emergency):
    answer = []
    a = sorted(emergency)
    a.reverse()
    for i in emergency:
        answer.append(a.index(i)+1)
    return answer
#   return [sorted(emergency, reverse=True).index(e) + 1 for e in emergency]