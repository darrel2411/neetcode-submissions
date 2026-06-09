class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const initial = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        const reversed = initial.split("").reverse().join("")
        return initial === reversed
    }
}
