# [Programmers - 120884] 치킨 쿠폰
def solution(chicken):
    answer = 0
    coupon = chicken
    ac = 0
    while coupon != 0:
        answer = answer + (coupon // 10)
        ac = ac + coupon % 10
        coupon = coupon // 10
        if ac >= 10:
            ac = ac - 10
            answer += 1
            coupon += 1

    return answer
#   return int(chicken*0.11111111111)
#   answer = (max(chicken,1)-1)//9