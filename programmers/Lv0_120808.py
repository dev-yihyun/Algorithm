# [Programmers - 120808] 분수의 덧셈

def solution(numer1, denom1, numer2, denom2):
    answer = []
    lcm = 0
    gcd = 0
    for i in range(max(denom1,denom2),(denom1*denom2)+1):
        if i%denom1 == 0and i%denom2==0:
            lcm=i
            break

    a = lcm//denom1
    b = lcm//denom2
    n = a*numer1 + b*numer2
    for i in range(min(n,lcm),0,-1):
        if n%i==0 and lcm%i==0:
            gcd = i
            break
    answer = [n//gcd,lcm//gcd]
    return answer
'''
import math

def solution(denum1, num1, denum2, num2):
    denum = denum1 * num2 + denum2 * num1
    num = num1 * num2
    gcd = math.gcd(denum, num)
    return [denum//gcd, num//gcd]
'''