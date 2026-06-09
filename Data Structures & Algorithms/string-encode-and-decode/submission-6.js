class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for(const s of strs){
            encoded += s.length + "#" + s
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let i = 0
        while (i < str.length) {
            let j = i

            // find the delimiter (#)
            while (str[j] !== "#") {
                j++
            }
            let wordLength = parseInt(str.slice(i, j))
            let wordStartIndex = j + 1
            let wordEndIndex = wordStartIndex + wordLength
            let word = str.slice(wordStartIndex, wordEndIndex)

            decoded.push(word)
            i = wordEndIndex
        }
        return decoded
    }
}
