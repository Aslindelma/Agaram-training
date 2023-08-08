# task 3:palindrome

# get_input=input("enter a word ")
# temp=" "
# for i in get_input:
#     temp=i+temp
#     if temp=="get_input":
#         print("it is palindrome")
#     else:
#         print("not a palindrome")

user_input = input("Enter a word : ").lower()
reverse_input=user_input[::-1]
print(reverse_input)
if user_input == reverse_input:
    print("palindrome")
else:
    print("not a palindrome")

