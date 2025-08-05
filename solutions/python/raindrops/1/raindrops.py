def convert(n):

    if (n % 3 == 0 and n % 5 == 0 and n % 7 == 0):
        return ("PlingPlangPlong")
    elif (n % 3 == 0 and n % 5 == 0):
        return ("PlingPlang")
    elif (n % 3 == 0 and n % 7 == 0):
        return ("PlingPlong")
    elif (n % 5 == 0 and n % 7 == 0):
        return ("PlangPlong")
    elif (n % 3 == 0):
        return ("Pling")
    elif (n % 5 == 0):
        return ("Plang")
    elif (n % 7 == 0):
        return ("Plong")
    else:
        return (str(n))
