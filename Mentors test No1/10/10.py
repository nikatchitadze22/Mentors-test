# 10. Given an array of strings strs, group the anagrams together.
#  You can return the answer in any order.

def anagrams(listn):
    anagrams = {}

    for s in listn:
        key = "".join(sorted(s))

        if key not in anagrams:
            anagrams[key] = []
            anagrams[key].append(s)

    return list(anagrams.values())


print(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))