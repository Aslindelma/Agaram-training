"""num=int(input("enter the number ")) #odd even
rem=num%2
if rem==0:
    print("even number")
else:
    print("odd number")"""

"""num1=int(input("enter the first number "))
num2=int(input("enter the second number "))
rem=num1%num2
if rem==0:
    print("yes")
else:
    print("no")"""

"""year=int(input("enter year "))               #leap year
if (year%400==0 and year%100==0) or (year%4==0 and not year%100==0):
    print("leap year")
else:
    print("not leap year")"""

year=int(input("enter year "))               #leap year(another way)
if (year%400==0 and year%100==0): 
    print("leap year")
elif (year%4==0 and not year%100==0):
    print("leap year")
else:
    print("not leap year")
