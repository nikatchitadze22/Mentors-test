# 1. Given an array containing n-1 numbers taken from the range 1 to n,
# write a function to find the missing number. There are no duplicates in the array.

def missing_num(arr):
    n = len(arr) + 1
    total = n * (n + 1) // 2
    sum_arr = sum(arr)
    return total - sum_arr

print(missing_num([1,2,3,4,5,7]))
