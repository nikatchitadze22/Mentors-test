# 4. Write a function to return the nth number in the Fibonacci sequence.
#  Solve it both recursively and iteratively.

def fbnch_recursive(n):
    if n <= 1:
        return n
    return fbnch_recursive(n - 1) + fbnch_recursive(n - 2)

def fbnch_iterative(listn):
    a, b = 0, 1
    for i in range(listn):
        a, b = b, a + b
    return a

print(fbnch_recursive(5))
print(fbnch_recursive(10))
print(fbnch_iterative(5))