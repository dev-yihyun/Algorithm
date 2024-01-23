# [Programmers - 120826] 특정 문자 제거하기
def solution(my_string, letter):
    answer = ''
    print(my_string)
    for i in range(len(my_string)):
        if my_string[i]!=letter:
            answer = answer+my_string[i]
    return answer
#   return my_string.replace(letter, '')