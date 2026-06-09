class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}; // the format will be --> value: index
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if (difference in map) {
                return [map[difference], i]
            } else {
                map[nums[i]] = i
            }
        }
    }
}
