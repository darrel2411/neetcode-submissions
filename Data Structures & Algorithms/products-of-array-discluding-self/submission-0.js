class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        /** Brute force O(n^2) */
    let output = []
    for (let i = 0; i < nums.length; i++) {
        let result = 1
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                result *= nums[j]
            }
        }
        if (result === -0) {
            output.push(0)
        } else {
            output.push(result)
        }
    }
    return output
    }
}
