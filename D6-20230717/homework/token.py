amount_of_an_item=int(input("Enter the amount = "))
if amount_of_an_item>500 and amount_of_an_item<=1000:
    print("You have owned a silver token")
elif amount_of_an_item>1000 and amount_of_an_item<5000:
    print("You have owned a gloden token")
elif amount_of_an_item>=5000:
    print("You have owned a platinum token")
elif amount_of_an_item<=500:
    print("no token available")
    