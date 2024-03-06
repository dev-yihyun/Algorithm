# [Programmers - 120878] 유한소수 판별하기
def solution(a, b):
    answer = 0
    answer = [i for i in range(1,a+1) if a%i==0 and b%i==0]
    g = answer[-1]
    b = b/g
    b1=b
    b2=b
    while b%2 ==0:
        b = b/2
    print(b)
    while b%5 == 0:
        b = b/5
    print(b)
    if b ==1:
        answer = 1
    else :
        answer = 2
    return answer

'''
    1. 최대공약수 g를 구한다.
    2. 분모 b를 최대공약수 g로나눈다.
    3. b를 2와 5로 나눈 나머지 값이 0이 될 때까지 반복문을 실행한다.
    2와5를 제외한 소수가 있는지 확인
    4. b가 1이라면 유한소수이므로 (분모의 소인수가 2와 5만 존재) 1을 리턴
    b가 그 외의 값이라면 무한소수이므로(분모에 2와 5를 제외한 소수가 포함) 2를 리턴
'''
'''
from math import gcd
def solution(a, b):
    b //= gcd(a,b)
    while b%2==0:
        b//=2
    while b%5==0:
        b//=5
    return 1 if b==1 else 2
'''
#   return 1 if a/b * 1000 % 1 == 0 else 2