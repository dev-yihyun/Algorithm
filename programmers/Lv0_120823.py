# [Programmers - 120823] 직각삼각형 출력하기

n = int(input())
for i in range(1,n+1):
    for j in range(i):
        print("*",end="")
    print()
#   print('\n'.join('*' * (i + 1) for i in range(int(input()))))
'''
n = int(input())
for i in range(1,n+1):
    print('*'*i)
'''