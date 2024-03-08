# [Programmers - 120880] 특이한 정렬
def solution(numlist, n):
    return sorted(numlist,key = lambda x:(abs(x-n),-x))
'''
answer = sorted(numlist,key = lambda x : (abs(x-n), n-x)) 
key에 요소를 리스트 혹은 튜플로 두 개 이상 줄 수 있다. 
이 경우 앞에 값이 같을 때 뒤의 값을 이용해서 나열한다. 
요소 하나이고 값이 같을 때는 먼저 처리된 수가 먼저 나열되는 것 같다(인덱스가 작은 것이).
'''