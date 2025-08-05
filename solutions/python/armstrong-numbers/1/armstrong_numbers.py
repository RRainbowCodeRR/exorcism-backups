def is_armstrong_number(number):
    given_number = number
    digits = []
    
    while number > 0:
        digits.append(number % 10)
        number = (number - number % 10) // 10
    length = len(digits)
    print(length)
    calc = []
    for digit in digits:
        calc.append(digit ** length)
        print(calc)

    total = sum(calc)
    print(total)
    if int(total) == int(given_number):
        return True
    else:
        return False
