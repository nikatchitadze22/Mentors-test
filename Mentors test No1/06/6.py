# 6. Given two sorted arrays nums1 and nums2, return the mean of the two sorted arrays.


def sorted1(nums1, nums2):
    merged = sorted(nums1 + nums2)
    n = len(merged)
    if n % 2 == 0:
        return (merged[n // 2 - 1] + merged[n // 2]) / 2
    return merged[n // 2]

print(sorted1([1,2,3], [4,5,6]))