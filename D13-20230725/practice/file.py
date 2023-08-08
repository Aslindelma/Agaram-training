# fruits=["apple","mango","grapes"]
# fruits.append("pineapple")      #add
# fruits[0]="banana"              #update
# print(fruits)

# fruits=["apple","mango","grapes"]
# fruits.append("pineapple")      
# fruits[0]="banana"
# fruits.insert(1,"orange")              
# print(fruits)

# row1=["rose","jasmine","lilly"]
# row2=["apple","mango","banana"]
# tworows=row1+row2
# print(tworows)

# details={"name":"delma",
#          "place":"devicode"}
# details["phone"]="1234567"      #add it to the dictionary
# details["place"]="karungal"     #it will replace the already given place in the dic
# details.update({"email":"aslin@gmail.com","dist":"kanyakumari"})
# print(details)

# friend_details=[{"name":"Delma","place":"midalam","hobbies":["drawing","gardening","playing chess"]},
#     {"name":"libin","place":"ammandivilai","hobbies":["bike riding","volley ball","running"]},
#     {"name":"ratheesh","place":"perunthurai","hobbies":["cricket","volley ball","gym"]},
#     {"name":"renitha","place":"thoppur","hobbies":["watching tv","gardening","playing games"]},
#     {"name":"vikash","place":"peruvilai","hobbies":["cricket","kabadi","gym"]},
#     {"name":"vinish","place":"boothapandi","hobbies":["foot ball","hand ball","pubg"]},
#     {"name":"hari","place":"monday market","hobbies":["kabadi","cricket","volley ball"]},
#     {"name":"azeem","place":"thituvilai","hobbies":["kabadi","volley ball","cricket"]}
#     ]
# friend_details.append({"name":"rinisha","place":"marthandam","hobbies":["gardening","drawing"]})
# print(friend_details)

friend_details=[{"name":"Delma","place":"midalam","hobbies":["drawing","gardening","playing chess"]},
    {"name":"libin","place":"ammandivilai","hobbies":["bike riding","volley ball","running"]},
    {"name":"ratheesh","place":"perunthurai","hobbies":["cricket","volley ball","gym"]},
    {"name":"renitha","place":"thoppur","hobbies":["watching tv","gardening","playing games"]},
    {"name":"vikash","place":"peruvilai","hobbies":["cricket","kabadi","gym"]},
    {"name":"vinish","place":"boothapandi","hobbies":["foot ball","hand ball","pubg"]},
    {"name":"hari","place":"monday market","hobbies":["kabadi","cricket","volley ball"]},
    {"name":"azeem","place":"thituvilai","hobbies":["kabadi","volley ball","cricket"]}
    ]
friend_details.append({"name":"rinisha","place":"marthandam","hobbies":["gardening","drawing","games"]})
for details in friend_details:
    details["hobbies"].append("coding")
print(friend_details)