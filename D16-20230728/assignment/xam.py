user_details = [{"name": "Delma", "email": "delma@gmail.com","password":"delma@123", "hobbies": ["drawing", "gardening", "playing chess"],"friends": ["suresh","adlin","tiny"]},
                 {"name": "libin", "email": "libin@gmail.com","password":"libin@123", "hobbies": ["bike riding", "volley ball", "running"],"friends": ["madhavan","selena","jenny"]},
                 {"name": "ratheesh", "email": "ratheesh@gmail.com","password":"ratheesh@123", "hobbies": ["cricket", "volley ball", "gym"],"friends": ["madan","yogi","miny"]},
                 {"name": "renitha", "email": "renitha@gmail.com","password":"renitha@123", "hobbies": ["watching tv", "gardening", "playing games"],"friends": ["parzival","lopez","luca"]},
                 {"name": "vikash", "email": "vikash@gmail.com","password":"vikash@123", "hobbies": ["cricket", "kabadi", "gym"],"friends": ["rosa","king","mani"]},
                 {"name": "vinish", "email": "vinish@gmail.com","password":"vinish@123", "hobbies": ["foot ball", "hand ball", "pubg"],"friends": ["kumar","vignesh","vicky"]},
                 {"name": "hari", "email": "hari@gmail.com","password":"hari@123", "hobbies": ["kabadi", "cricket", "volley ball"],"friends": ["venkat","ram","sita"]},
                 {"name": "azeem", "email": "azeem@gmail.com","password":"azeem@123", "hobbies": ["kabadi", "volley ball", "cricket"],"friends": ["serena","gomes","marshellow"]}
                 ]
                 
email = input("Enter mail_id : ")
passwd = input("Enter password : ")

def login(u_email,u_password):
    for detail in user_details:
        email=detail["name"]
        password=detail["password"]
        if u_email == email and u_password == password:
                
            print(detail["name"],detail["email"])

                
            for hobby in detail['hobbies']:
                print(hobby)
                
            for frd_name in detail['friends']:
                print(frd_name)
            detail.update({'LoggedIn' :True})
        else:
            detail.update({'LoggedIn':False})

    for i in user_detail:
        print(i)


login(email,passwd)