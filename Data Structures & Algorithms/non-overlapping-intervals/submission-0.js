class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        const sorted = intervals.sort((a,b) => a[0] - b[0])
        let counter = 0
        let prevEnd = intervals[0][1]

        for(let i = 1; i < sorted.length; i++){
            const [start, end] = sorted[i]
            if(start >= prevEnd){
                prevEnd = end
            } else {
                counter++
                prevEnd = Math.min(end, prevEnd)
            }
        }
        return counter
    }
}
