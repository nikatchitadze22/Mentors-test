# 2. Write a function to find the longest common prefix among an array of strings.
# If there is no common prefix, return an empty string.

def long_prefix(lists):
    if not lists:
        return ""
    
    prefix = lists[0]
    for s in lists[1:]:
        while s[:len(prefix)] != prefix and prefix:
            prefix = prefix [:-1]
        return prefix
    
print(long_prefix(["nigger","nigga","niggazaurus"]))