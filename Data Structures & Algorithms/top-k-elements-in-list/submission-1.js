class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for (const num of nums) {
            if (!count[num]) count[num] = 1
            else count[num] += 1
        }
        
        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
        }
}
