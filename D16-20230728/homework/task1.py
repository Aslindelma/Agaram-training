# Write a function that takes a sentence as input and returns the longest word in the sentence.

#   Sample input : "Hai I'm Niranjan and Im from Nagercoil"
#   Output :  Nagercoil is the longest word

"""sentence = input("Enter a sentence : ")

def find_longest_word(sen):

    split_sen = sen.split()
    longest_word = max(split_sen, key=len)

    return longest_word
result = find_longest_word(sentence)
print(result)"""

# sentence = input("Enter a sentence : ")
# split_sen = sentence.split()
# print(split_sen)
# longest_word = max(split_sen, key=len)
# print(longest_word)

sentence = input("Enter a sentence : ")

def find_longest_word(sen):
    length = 0
    word = " "
    split_sen = sen.split()
    for word_found in split_sen:
        print(word_found) 
        if len(word_found)>length:
            length = len(word_found)
            word = word_found
    return (word)

result = find_longest_word(sentence)   
print(result)  