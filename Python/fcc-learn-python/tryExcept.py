try:
    number = int(input("Enter a number: "))
    print(number)
except ZeroDivisionError as err:
    print(err)
except ValueError:
    print("Invalid input")

 # Catch specific errors
 # 'except' by itself is too broad