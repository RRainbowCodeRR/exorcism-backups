def square_of_sum(number):
    if number < 1:
        raise ValueError("Please enter a number greater than zero.")
    else:
        count = number
        num_list = []
        while count > 0:
            num_list.append(count)
            count = count - 1
        num_sum = sum(num_list)
        return num_sum ** 2


def sum_of_squares(number):
    if number < 1:
        raise ValueError("Please enter a number greater than zero.")
    else:
        count = number
        num_list = []
        sqrs_list = []
        while count > 0:
            num_list.append(count)
            count = count - 1
        for num in num_list:
            sqrs_list.append(num ** 2)
        return sum(sqrs_list)
            
        
def difference_of_squares(number):
    return square_of_sum(number) - sum_of_squares(number)
