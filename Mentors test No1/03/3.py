# 3. Given an array of size n, find the majority element. The majority element is 
# the element that appears more than n // 2 times. You may assume that the array is 
# non-empty and the majority element always exists in the array.

def nsize_list(n):
    count = 0
    candidate = None

    for i in n:
        if count == 0:
            candidate = i
        count += (1 if i == candidate else -1)
    return candidate

print(nsize_list([3,2,1,4,4,5]))
