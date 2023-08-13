"""Write a function that takes a string as input and returns a 
dictionary containing the frequency of each word in the string.

Sample input :  str = "the quick brown fox jumps over the lazy dog the quick brown fox"
Output :  {  'the': 2,  'quick': 2, 'brown': 2,     'fox': 2,   
          'jumps': 1,     'over': 1,     'lazy': 1,     'dog': 1 }"""


input = "the quick brown fox jumps over the lazy dog the quick brown fox"
output = {}
for word in input.split():
    
    if word in output:
        
        output[word] +=1
    
    else:output[word]=1

print(output)