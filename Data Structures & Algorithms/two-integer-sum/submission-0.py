class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        the_map = {} # use hash map
        for i, num in enumerate(nums):
            diff = target - num
            if diff in the_map:
                return [the_map[diff], i]
            
            the_map[num] = i
        
        return
    