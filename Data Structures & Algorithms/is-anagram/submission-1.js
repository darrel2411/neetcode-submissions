class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj_s = {}
        let obj_t = {}

        if(s.length !== t.length) return false
        
        for (let i = 0; i < s.length; i++) {
            if(!obj_s[s[i]]) {
                obj_s[s[i]] = 1
            } else {
                obj_s[s[i]]++
            }
        }

        for (let i = 0; i < t.length; i++) {
            if(!obj_t[t[i]]) {
                obj_t[t[i]] = 1
            } else {
                obj_t[t[i]]++
            }
        }

        for (const el in obj_s) {
            if(obj_s[el] !== obj_t[el]) return false
        }

        return true
    }
}
