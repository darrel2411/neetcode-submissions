class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const sorted = intervals.sort((a, b) => a[0] - b[0])
        
        const result = [sorted[0]]

        for(let i = 1; i < sorted.length; i++){
            const currentInterval = result[result.length - 1]
            const nextInterval = sorted[i]

            if(currentInterval[1] >= nextInterval[0]){
                currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
            } else {
                result.push(nextInterval)
            }
        }

        return result
    }
}
