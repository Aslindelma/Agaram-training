# Task: Grouping Elements by Category
# Description: Given a list of items, group them into categories using a dictionary, 
# where the keys are the categories and the values are lists of items belonging to each category.

# output: {'Fruits':['Apple','Banana'],'Vegetables':['Carrot','Broccoli']}


items_list = [
    {'name': 'apple', 'category': 'fruits'},
    {'name': 'carrot', 'category': 'vegetables'},
    {'name': 'banana', 'category': 'fruits'},
    {'name': 'broccoli', 'category': 'vegetables'}
]


# def group_ele_by_category(list):

#     result={}
#     fruits=[]
#     vegetables=[]
#     for item in list:
        

#         if item["category"]=='fruits':
#             fruits.append(item['name'])
#             print(fruits)
#         elif item["category"]=='vegetables':
#             vegetables.append(item['name'])

#             print(vegetables)
#     result.update({"fruits":fruits,"vegetables":vegetables})

#     return result   
# group_ele_by_category(items_list)
# print(group_ele_by_category(items_list))
# =========================================

# adding an element in list without using append 

# item=[{'name':'grapes','category':'fruits'}]
# print(items_list+item)

# ==============================================
















group_ele_by_category(items_list)