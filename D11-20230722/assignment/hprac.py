
# list=[2,3,4,5,6,10,1,22,11]
# min_value=list[0]
# for num in list:
#     if num<=min_value:
#         min_value=num
# print(min_value)

# monthly_gold_rate=[
#                    {
#                     "month":"january",
#                     "gold_rate":2000,
#                     "jewel":[{"name":"chain",
#                               "mak_charge":14
#                              },
#                              {
#                               "name":"ring",
#                                 "mak_charge":10
#                              }]
#                     },
#                    {
#                     "month":"febuary",
#                     "gold_rate":1000,
#                     "jewel":[{"name":"chain",
#                               "mak_charge":13
#                              },
#                              {
#                               "name":"bangle",
#                               "mak_charge":12
#                              }]
#                     },
#                    {
#                     "month":"march",
#                     "gold_rate":900,
#                     "jewel":[{"name":"ear_ring",
#                               "mak_charge":9
#                              },
#                              {"name":"bangle",
#                               "mak_charge":10
#                              }]
#                     },
#                    {
#                     "month":"april",
#                     "gold_rate":5000,
#                     "jewel":[{"name":"chain",
#                               "mak_charge":18
#                              },
#                              {"name":"ring",
#                               "mak_charge":15
#                              }]
#                    },
#                    {
#                     "month":"may",
#                     "gold_rate":3500,
#                     "jewel":[{"name":"bangle",
#                               "mak_charge":15
#                              },
#                              {
#                               "name":"ring",
#                               "mak_charge":13
#                              }]
#                    }]
# min_value=monthly_gold_rate[0]["gold_rate"]
# max_value=monthly_gold_rate[0]["gold_rate"]
# min_month=None
# max_month=None
# for item in monthly_gold_rate:
#     if item["gold_rate"]<=min_value:
#         min_value=item["gold_rate"]
#         min_month=item["month"]
#     elif item["gold_rate"]>=max_value:
#         max_value=item["gold_rate"]
#         max_month=item["month"]
# print("gold is cheaper in "+min_month+" is "+str(min_value))
# print("gold is costly in "+max_month+" is "+str(max_value))



# monthly_gold_rate=[
#                    {
#                     "month":"january",
#                     "gold_rate":2000,
#                     "jewel":[{"name":"chain",
#                               "mak_charge":14
#                              },
#                              {
#                               "name":"ring",
#                                 "mak_charge":10
#                              }]
#                     },
#                    {
#                     "month":"febuary",
#                     "gold_rate":1000,
#                     "jewel":[{"name":"chain",
#                               "mak_charge":13
#                              },
#                              {
#                               "name":"bangle",
#                               "mak_charge":12
#                              }]
#                     },
#                    {
#                     "month":"march",
#                     "gold_rate":900,
#                     "jewel":[{"name":"ear_ring",
#                               "mak_charge":9
#                              },
#                              {"name":"bangle",
#                               "mak_charge":10
#                              }]
#                     },
#                    {
#                     "month":"april",
#                     "gold_rate":5000,
#                     "jewel":[{"name":"chain",
#                               "mak_charge":18
#                              },
#                              {"name":"ring",
#                               "mak_charge":15
#                              }]
#                    },
#                    {
#                     "month":"may",
#                     "gold_rate":3500,
#                     "jewel":[{"name":"bangle",
#                               "mak_charge":15
#                              },
#                              {
#                               "name":"ring",
#                               "mak_charge":13
#                              }]
#                    }]
# min_value=monthly_gold_rate[0]["gold_rate"]
# max_value=monthly_gold_rate[0]["gold_rate"]
# min_month=None
# max_month=None
# for item in monthly_gold_rate:
#     if item["gold_rate"]<=min_value:
#         min_value=item["gold_rate"]
#         min_month=item["month"]
# for item in monthly_gold_rate:
#     if item["gold_rate"]>=max_value:
#         max_value=item["gold_rate"]
#         max_month=item["month"]
# for item in monthly_gold_rate:
#     print("gold rate is : "+str(item["gold_rate"]))
#     jewel=item["jewel"]
#     for j in jewel:
#         cal_mak_charge=item["gold_rate"]*j["mak_charge"]/100
#         gst=(item["gold_rate"]+cal_mak_charge)*.03
#         final_rate=item["gold_rate"]+cal_mak_charge+gst
#         print("gold rate of "+j["name"]+" is "+str(final_rate))
# print("gold is cheaper in "+min_month+" is "+str(min_value))
# print("gold is costly in "+max_month+" is "+str(max_value))


"""user_details = [
                
                {
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,89,86]
                }
        ]  
for student in user_details:
    print(student['marks'])
    total = 0
    for x in student["marks"]: 
        total = total + x
    print(total)
    max_mark=0              #wrong
    max_total=total
    if max_total>=max_mark:
        max_mark=max_total
print("max_mark is ",max_mark)"""


user_details = [
                
                {
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,89,86]
                }
        ]  
for student in user_details:
    total = 0
    for x in student["marks"]: 
        total = total + x
    print(total)
    min_mark=total
    if min_total<=min_mark:
        min_mark=min_total
print("min_mark is ",min_mark)
print("max_mark is ",max_mark)

