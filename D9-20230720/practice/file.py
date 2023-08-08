"""num1=int(input("enter number1 "))
num2=int(input("enter number2 "))
operation=input("enter the mathematical operation")
if operation=="add":
    print("addition", num1+num2)
elif operation=="subtract":
    print("subraction", num1-num2)
elif operation=="multiply":
    print("miltiplication", num1*num2)
else:
    print("division", num1/num2)"""

# basic_salary=int(input("enter the salary"))
# hra1=basic_salary*.2
# da1=basic_salary*.05
# hra2=basic_salary*.25
# da2=basic_salary*.07
# hra3=basic_salary*.3
# da3=basic_salary*.08
# if basic_salary<=10000:
#     print("salary =",basic_salary+hra1+da1)
# elif basic_salary>10000 and basic_salary<20000:
#     print("salary =",basic_salary+hra2+da2)
# else:
#     print("salary =",basic_salary+hra3+da3)

"""basic_salary=int(input("enter the salary"))
allowances=[{"hra":basic_salary*.2,"da":basic_salary*.05},
            {"hra":basic_salary*.25,"da":basic_salary*.07},
            {"hra":basic_salary*.3,"da":basic_salary*.08}]
if basic_salary<=10000:
    print("salary =",basic_salary+allowances[0]["hra"]+allowances[0]["da"])
elif basic_salary>10000 and basic_salary<=20000:
    print("salary =",basic_salary+allowances[1]["hra"]+allowances[1]["da"])
else:
    print("salary =",basic_salary+allowances[2]["hra"]+allowances[2]["da"])"""

"""num1=int(input("enter munber1 "))
num2=int(input("enter number2 "))
num3=int(input("enter number3 "))
num4=int(input("enter number4 "))
num5=int(input("enter number5 "))
add=num1+num2+num3
print("add",add)
mul1=add*num4
print("multiply with num4",mul1)
mul2=mul1*num5
print("multiply with num5",mul2)
if mul2%2==0:
    print("even number")
else:
    print("odd number")"""

"""maths=int(input("enter maths mark "))
phy=int(input("enter physics mark "))
che=int(input("enter chemistry mark "))
total=maths+phy+che
total1=maths+phy
if (maths>=65 and phy>=55 and che>=50 and total>=190) or (total1>=140):
    print("candidate is eligible")
else:
    print("not eligible")"""

unit=int(input("enter the electricity unit"))
cost_per_unit=int(input("enter cost per unit"))
cost=unit*cost_per_unit
additional_charge=50
gst=cost*.18
if unit<100:
    print("total cost ",cost+gst)
elif unit>=100 and unit<500:
    print("total cost ",cost+additional_charge+gst)
elif unit>=500 and unit<1000:
    print("total cost ",cost+(cost*5)+gst)










































































