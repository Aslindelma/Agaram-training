def group_ele_by_category(list):
    categorized_items = {}
    print(categorized_items)

    for item in items_list:
        name=item['name']
        print(name)
        category=item['category']
        print(category)
        if category not in categorized_items:
            categorized_items[category]=[]
            print(categorized_items)
       
        categorized_items[category].append(name)
   
    print(categorized_items)


group_ele_by_category(items_list)
