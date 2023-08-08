friend_details=[{"name":"Delma","place":"midalam","hobbies":["drawing","gardening","playing chess"]},
    {"name":"libin","place":"ammandivilai","hobbies":["bike riding","volley ball","running"]},
    {"name":"ratheesh","place":"perunthurai","hobbies":["cricket","volley ball","gym"]},
    {"name":"renitha","place":"thoppur","hobbies":["watching tv","gardening","playing games"]},
    {"name":"vikash","place":"peruvilai","hobbies":["cricket","kabadi","gym"]},
    {"name":"vinish","place":"boothapandi","hobbies":["foot ball","hand ball","pubg"]},
    {"name":"hari","place":"monday market","hobbies":["kabadi","cricket","volley ball"]},
    {"name":"azeem","place":"thituvilai","hobbies":["kabadi","volley ball","cricket"]}
    ]
for friends in friend_details:
    for hobby in friends["hobbies"]:
        if hobby=="drawing":
            friends.update({"eligible":"True"})
        else:
            friends.update({"eligible":"False"})

