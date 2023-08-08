friends_names=[{"name":"Delma","place":"midalam","hobbies":["drawing","gardening","playing chess"]},
    {"name":"libin","place":"ammandivilai","hobbies":["bike riding","volley ball","running"]},
    {"name":"ratheesh","place":"perunthurai","hobbies":["cricket","volley ball","gym"]},
    {"name":"renitha","place":"thoppur","hobbies":["watching tv","gardening","playing games"]},
    {"name":"vikash","place":"peruvilai","hobbies":["cricket","kabadi","gym"]},
    {"name":"vinish","place":"boothapandi","hobbies":["foot ball","hand ball","pubg"]},
    {"name":"hari","place":"monday market","hobbies":["kabadi","cricket","volley ball"]},
    {"name":"azeem","place":"thituvilai","hobbies":["kabadi","volley ball","cricket"]}
    ]
for name in friends_names:
    hobbies=name["hobbies"]
    position=0
    for hobby in hobbies:
      if hobby=="kabadi":
        hobbies[position]="designing"
      position=position+1
        
print(friends_names)

