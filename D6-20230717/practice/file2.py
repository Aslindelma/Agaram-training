gender="male"
if gender=="male":
    print("Blue")

gender="female"
if gender=="male":
    print("Blue")
else:
    print("Pink") 

gender="male"
if gender=="male":
    print("Blue")
else:
    print("Pink")

gender="trans"
if gender=="male":
    print("Blue")
elif gender=="female":
    print("Pink")
elif gender=="trans":
    print("Lavender")
else:
    print("Invalid")

gender=input("Enter gender ")
if gender=="male":
    print("Blue")
elif gender=="female":
    print("Pink")
elif gender=="trans":
    print("Lavender")
else:
    print("Invalid")

total_mark=int(input("Enter total mark "))
if total_mark>92:  
    print("You are eligible for MBBS")  
elif total_mark>85 and total_mark<=92:
    print("You are eligible for BDS")      
elif total_mark>75 and total_mark<=85:
    print("You are eligible for Agri")     
else:
    print("Go to Engineering")         