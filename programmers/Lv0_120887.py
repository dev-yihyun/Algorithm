# [Programmers - 120887] k의 개수

def solution(i, j, k):
    answer = 0
    a=''
    for b in range(i,j+1):
        a += str(b)
    line = list(a)
    answer = line.count(str(k))
    return answer

'''
입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0
'''

'''
def solution(i, j, k):
    answer = sum([ str(i).count(str(k)) for i in range(i,j+1)])
    return answer
'''