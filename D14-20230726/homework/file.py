userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]


    
# def login(log):
#     for details in userDtails:

#         user_name=details["e_mail"]
#         user_code=details["password"]
    
#         if log=="login":
        
#             email=input("enter your email ")
#             password=input("enter your password ")
            
#             if user_name=="email" and user_code=="password":
#                 print("login successfully")
#             elif not user_name=="email" or not user_code=="password":
#                 print("enter correct detail")
#             break
# def register(reg):
#     if reg=="register":
#         name=input("enter your name ")
#         e_mail=input("enter your email ")
#         password=input("enter password ")
#         confirm_password=input("enter confirm password ")
#         if password=="confirm_password":
#             print("registered successfully")

    
# get_input=input("register or login ")
# if get_input=="login":
#     login(user_login
# elif get_input=="register":
#     register()

# ============

# This Function For User Login
def userLogin(mail,passw):

    isUserFound = False
    
    for mail_pass in userDtails:

        if mail==mail_pass["e_mail"]:

            if mail_pass["e_mail"]==mail and mail_pass["password"]==passw:
                print(f" SUCCESSFULLY LOGED IN {mail_pass['name']} ")

            else:
                print(" Incorrect Password")

            isUserFound = True
            break

    if isUserFound==False:
        print("User Not Found")

# This Function For User Registraion
def registerUser():
    
    usr_name = input("Enter Your Name : ")
    email = input("Enter Your Email : ")
    password = input("Enter Your Password : ")
    confrm_pass = input("Enter Your COnfirm Password : ")
    if password==confrm_pass:
        pass
    else: 
        print("Passwords Doesn't Match")
        return
            
    isUserFound = False

    for mail_pass in userDtails:

        if mail_pass["e_mail"]==email:
                isUserFound= True
                break
        
    if isUserFound==False:
            new_user={"name":usr_name,
                     "email":email,
                     "password":password}
            userDtails.append(new_user)
            print("\nYou Are Registered sucessfully\n")
            print(userDtails)
    else :
         print("\nYou Are already a user Please Login\n")
         userActivity('Login')

# This Function Check User Activity 
def userActivity(action):


    if action=='Register':
        registerUser()

    elif action=='Login':
        email = input("Enter Your Email : ")
        password = input("Enter Your Password : ")
        userLogin(email,password)

    else :
        print(" Please Enter A Valid Key ")


# __The program Starts Here_ # 

userChoice=input("Select Your Option \n Register / Login \n :::::::  ")
userActivity(userChoice)
