food1=input("enter food item1 ")
food2=input("enter food item2 ")
foods={"milk":1.02,
       "popcorn":2.5,
       "bread":2.5}
if (food1=="milk" and food2=="popcorn") or (food1=="popcorn" and food2=="milk"):
    print("total price =",foods["milk"]+foods["popcorn"])
elif (food1=="popcorn" and food2=="bread") or (food1=="bread" and food2=="popcorn"):
    print("total price =",foods["popcorn"]+foods["bread"])
elif (food1=="bread" and food2=="milk") or (food1=="milk" and food2=="bread"):
    print("total price =",foods["bread"]+foods["milk"])
else:
    print("food is not available")