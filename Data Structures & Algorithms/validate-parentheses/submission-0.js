class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const seen = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        let stack = []
        for(const char of s){
            if(char in seen){
                let lastElement = stack.pop()
                if(lastElement !== seen[char]){
                    return false
                } 
            } else {
                stack.push(char)
            }
        }
        return stack.length === 0
    }
    
}
