name=input("Enter your name : ")
gender=input("Enter your gender : ")
age=int(input("Enter your age : "))
if age>60:
    if gender=="male":
        print("Hi Mr.",name,"You are a senior citizen")
    else:
        print("Hi Miss.",name,"You are a senior citizen")
elif age>=18:
    if gender=="male":
        print("Hi Mr.",name,"You are an adult")
    else:
        print("Hi Miss.",name,"You are an adult")
elif age<18:
    if gender=="male":
        print("Hi Mr.",name,"You are a teenager")
    else:
        print("Hi Miss.",name,"You are a teenager")