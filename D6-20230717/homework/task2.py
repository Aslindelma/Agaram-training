"""email=input("enter your email ")
password=input("enter your password ")
if email=="example@gmail.com" and password=="123456":
    print("you are logged in successfully")
elif email!="example@gmail.com" and password=="123456":
    print("wrong email")
elif email=="example@gmail.com" and password!="123456":
    print("wrong password")
elif email!="example@gmail.com" and password!="123456":
    print("you are not authenticated")"""

email=input("enter your email ")
password=input("enter your password ")
if email=="example@gmail.com" and password=="123456":
    print("you are logged in successfully")
elif not email=="example@gmail.com" and password=="123456":
    print("wrong email")
elif email=="example@gmail.com" and not password=="123456":
    print("wrong password")
else:
    print("you are not authenticated")
