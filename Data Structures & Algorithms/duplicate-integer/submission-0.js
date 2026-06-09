class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let theMap = {}
        for (let i = 0; i < nums.length; i++) {
            if (!theMap[nums[i]]) {
                theMap[nums[i]] = 1
            } else {
                return true
            }
        }
        return false
    }
}
