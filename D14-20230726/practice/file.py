# def function_name():
#     print("I am called")
# function_name()


# def function_name():
#     first_name="Aslin"
#     last_name="Delma"
#     print(first_name,last_name)
# function_name()

# def combine_name(a,b):
#     print(a+" "+b)
# combine_name("Karka","Academy")

# first_name=input("enter first name ")
# last_name=input("enter last name ")
# def combine_name(a,b):
#     print(a+" "+b)
# combine_name(first_name,last_name)

# gender=input("enter gender")
# def name(gen):
#     if gen=="male":
#         print("blue")
#     else:
#         print("pink")
# name(gender)

# gender=input("enter gender ")
# def name(a):
#     if a=="male":
#         print("blue")
#     elif a=="female":
#         print("pink")
#     else:
#         print("green")
# name(gender)

"""num1=int(input("enter first number "))
num2=int(input("enter second number "))
def max_number(n1,n2):
    if n1>n2:
        print(num1,"is maximum")
    elif n2>n1:
        print(num2, "is maximun")
    else:
        print(num1,num2,"are equal")
    
max_number(num1,num2)"""

f_input = int(input("Enter your first number"))
s_input = int(input("Enter your second number"))

def find_even_odd(number):
    if number%2==0:
            print("even")
    else:
            print("odd")

def find_max_number(f,s):
    
    if f<s:
        find_even_odd(s) 
        print("second input is max")
    elif s<f:
        find_even_odd(f) 
        print("first input is max")
    elif s==f:
        print("both are same")
    else:
        print("check the input")

find_max_number(f_input,s_input) 




















    

