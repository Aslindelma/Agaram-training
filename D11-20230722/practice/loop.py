# list=[1,2,3,4,5,6,7,8,9,10,15]
# for num in list:
#     if num%3==0 and num%5==0:
#         print("fizzbuzz")
#     elif num%3==0:
#         print("fizz")
#     elif num%5==0:
#         print("buzz")
#     else:
#         print(num)

"""list=[1,2,3,4,5,6,7,8,9,10,15]
mul3=0
mul5=0
mul_3_5=0
for num in list:
    if num%3==0 and num%5==0:
        mul_3_5+=1
    if num%3==0:
        mul3+=1
    if num%5==0:
        mul5+=1
print("multiply of 3 :",mul3)
print("multiply of 5 :",mul5)
print("multiply of 3 & 5 :",mul_3_5)"""

"""monthly_gold_rate=[{"month":"january","gold_rate":2000},
                   {"month":"febuary","gold_rate":1000},
                   {"month":"march","gold_rate":900},
                   {"month":"april","gold_rate":5000},
                   {"month":"may","gold_rate":3500}]
min_value=monthly_gold_rate[0]["gold_rate"]
for item in monthly_gold_rate:
    print(item["gold_rate"])
    if item["gold_rate"]<=min_value:
        min_value=item["gold_rate"]
print("minimum value :",min_value)"""

"""monthly_gold_rate=[{"month":"january","gold_rate":2000},
                   {"month":"febuary","gold_rate":1000},
                   {"month":"march","gold_rate":900},
                   {"month":"april","gold_rate":5000},
                   {"month":"may","gold_rate":3500}]
min_value=monthly_gold_rate[0]["gold_rate"]
max_value=monthly_gold_rate[0]["gold_rate"]
for item in monthly_gold_rate:
    print(item["gold_rate"])
    if item["gold_rate"]<=min_value:
        min_value=item["gold_rate"]
    elif item["gold_rate"]>=max_value:
            max_value=item["gold_rate"]
print("minimum value :",min_value)
print("maximum value :",max_value)"""

"""monthly_gold_rate=[{"month":"january","gold_rate":2000},
                   {"month":"febuary","gold_rate":1000},
                   {"month":"march","gold_rate":900},
                   {"month":"april","gold_rate":5000},
                   {"month":"may","gold_rate":3500}]
min_value=monthly_gold_rate[0]["gold_rate"]
max_value=monthly_gold_rate[0]["gold_rate"]
min_month=None
max_month=None
for item in monthly_gold_rate:
    if item["gold_rate"]<=min_value:
        min_value=item["gold_rate"]
        min_month=item["month"]
    elif item["gold_rate"]>=max_value:
        max_value=item["gold_rate"]
        max_month=item["month"]
print("gold rate is minimum in ",min_month,min_value)
print("gold rate is maximum in ",max_month,max_value)"""

"""monthly_gold_rate=[{"month":"january","gold_rate":2000,"jewel_list":[{"name":"chain",
                                                                      "making_charge":12},
                                                                      {"name":"bangle",
                                                                      "making_charge":11}]},
                   {"month":"febuary","gold_rate":1000,"jewel_list":[{"name":"chain",
                                                                     "making_charge":10},
                                                                     {"name":"ring",
                                                                     "making_charge":9}]},
                   {"month":"march","gold_rate":900,"jewel_list":[{"name":"chain",
                                                                     "making_charge":9},
                                                                     {"name":"ring",
                                                                     "making_charge":8}]},
                   {"month":"april","gold_rate":5000,"jewel_list":[{"name":"chain",
                                                                     "making_charge":18},
                                                                     {"name":"ring",
                                                                     "making_charge":15}]},
                   {"month":"may","gold_rate":3500,"jewel_list":[{"name":"chain",
                                                                     "making_charge":14},
                                                                     {"name":"ring",
                                                                     "making_charge":12}]}]
min_value=monthly_gold_rate[0]["gold_rate"]
max_value=monthly_gold_rate[0]["gold_rate"]
min_month=None
max_month=None
for item in monthly_gold_rate:
    if item["gold_rate"]<=min_value:
        min_value=item["gold_rate"]
        min_month=item["month"]
    elif item["gold_rate"]>=max_value:
        max_value=item["gold_rate"]
        max_month=item["month"]
for jewel in monthly_gold_rate:
    print(item["jewel_list"])
print("gold rate is minimum in ",min_month,min_value)
print("gold rate is maximum in ",max_month,max_value)

for item in  monthly_gold_rate:
    
    print( "Gold rate is " + str(item["rate"]))
    jewls_list = item["jewls_list"]
    
    for j in jewls_list:
                        # 2000 * 13 / 100
        cal_mak_charge = item["rate"] * j['making_charge'] / 100
        final_charge = item["rate"] + cal_mak_charge
        print( j['name'] + " rate is "+ str(final_charge))"""

user_details = [{
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,94,86]
                }]
max_mark=0 
min_mark=None   
for student in user_details:
    total=0
    for x in student["marks"]:
        total=x+total
    print(total)
    if total>=max_mark:
        max_mark=total
    if min_mark==None:
        min_mark=total
    elif min_mark>total:
        min_mark=total
print("maximun mark : ",max_mark)
print("minimum mark : ",min_mark)

    


    

