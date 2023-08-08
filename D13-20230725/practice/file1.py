hobby=input("enter the hobbies ")
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
    # print(details)
    for hob in details["hobbies"]:
        # print(hob)
        if hob==hobby:
            print(details["name"])