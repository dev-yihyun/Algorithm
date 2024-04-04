# [Programmers - 120896] 한 번만 등장한 문자

def solution(s):
    answer = ''
    l = []
    line = list(s)
    for i in range(len(s)):
        if line.count(line[i]) ==1:
            l.append(s[i])
    l = sorted(l)
    answer = ''.join(a for a in l)
    return answer

#   answer = "".join(sorted([ ch for ch in s if s.count(ch) == 1]))