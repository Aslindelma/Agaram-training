veg_pizza=500
extra_toppings=80
soft_drinks=45
delivery_charge=50
pizza=veg_pizza*2+extra_toppings+soft_drinks*3+delivery_charge
gst=(pizza)*.18
total=pizza+gst
print(total)
