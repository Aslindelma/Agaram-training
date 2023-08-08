"""Write a Python function called “max_vowels_word” that takes a string as input 
and returns the word with the maximum number of vowels. 

If there are multiple words with the same maximum number of vowels, 
return the first occurrence of such a word.
If the input list is empty or contains no words, 
return an empty string.
  Sample input : "Hai I'm Niranjan and Im from Nagercoil"
  Output :  Maximum vowels are in the word “Nagercoil”"""


def count_vowels(word):

    vowels = "aeiouAEIOU"
    vowel_count = 0

    for char in word:
        # print(char)
        if char in vowels:
            vowel_count += 1

    return vowel_count

def find_max_vowels_word(sentence):
    vowels = "aeiouAEIOU"
    max_vowel_count = 0
    max_vowel_word = ""

    for word in sentence.split():
        # print(word)
        vowel_count = count_vowels(word)
        if vowel_count > max_vowel_count:
            max_vowel_count = vowel_count
            max_vowel_word = word
            print("max vowel count  ",max_vowel_count)

    return max_vowel_word

input_sentence = "Hai I'm Niranjan and Im from Nagercoil"
result = find_max_vowels_word(input_sentence)
print("Word with maximum vowels:", result)