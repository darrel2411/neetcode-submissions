class Solution(object): 
    def topKFrequent(self, nums, k): # use bucket sort
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        freq = [[] for x in range(len(nums) + 1)]

        for num in nums:
            count[num] = 1 + count.get(num, 0)

        # print(count)

        for num, c in count.items():
            # print(f"this is c: {c} <<< >>> this is n: {num}")
            freq[c].append(num)

        # print(freq)

        output = []
        for i in range(len(freq) - 1, 0, -1):
            # print(i)
            for num in freq[i]:
                output.append(num)
                if len(output) == k:
                    return output

        return