vowel = ('a', 'e', 'i', 'o', 'u', 'xr', 'yt')

consonant = ('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',

             'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z')

two_ltr_combo = ('ch', 'qu', 'th', )

three_ltr_combo = ('thr', 'sch')
squ_combo = ('squ')


def translate(eng):
    word_list = eng.split()
    translated_phrase = ""
    for word in word_list:
        if (len(word) == 2) & (word[1] == 'y'):
            letter = word[1]
            word = word[0:1]
            phrase = letter + word + 'ay'
            return (phrase)

        elif (word.startswith(consonant, 0, 1)) & (word.startswith(consonant, 1, 2)) & (word[2] == 'y'):
            letter = word[0:2]
            trim_str = word[2:]
            trim_str += letter + "ay"
            translated_phrase += trim_str + " "

        elif word.startswith(squ_combo, 0, 3):
            letter = word[0:3]
            trim_str = word[3:]
            trim_str += letter + "ay"
            translated_phrase += trim_str + " "

        elif word.startswith(three_ltr_combo, 0, 3):
            letter = word[0:3]
            trim_str = word[3:]
            trim_str += letter + "ay"
            translated_phrase += trim_str + " "

        elif word.startswith(two_ltr_combo, 0, 2):
            letter = word[0:2]
            trim_str = word[2:]
            trim_str += letter + "ay"
            translated_phrase += trim_str + " "

        elif word.startswith(vowel, 0, 2):
            word += "ay"
            translated_phrase += word

        elif word.startswith(consonant, 0, 1):
            letter = word[0:1]
            trim_str = word[1:]
            trim_str += letter + "ay"
            translated_phrase += trim_str + " "
    return (translated_phrase.strip())
