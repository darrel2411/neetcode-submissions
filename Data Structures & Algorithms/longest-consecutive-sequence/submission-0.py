class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums) # this create O(1), meanwhile if its array its O(N)
        longest = 0
        for n in numSet:
            if(n - 1) not in numSet:
                length = 0
                while(n + length) in numSet:
                    length += 1
                
                longest = max(longest, length)

        return longest