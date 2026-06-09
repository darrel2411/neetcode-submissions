class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map()

        for (const s of strs) {
            console.log(`this is original string --> ${s}`)
            const key = s.split("").sort().join("")
            console.log(`this is key --> ${key}`)
            if (!groups.has(key)) {
                groups.set(key, [])
            }
            groups.get(key).push(s)
        }

        return Array.from(groups.values())
    }
}
