/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const startTime = intervals.map(el => el.start).sort((a,b) => a - b)
        const endTime = intervals.map(el => el.end).sort((a,b) => a - b)
        
        let count = 0
        let result = 0
        let s = 0
        let e = 0

        while(s < intervals.length) {
            if(startTime[s] < endTime[e]){
                s++
                count++
            } else {
                e++
                count--
            }
            result = Math.max(result, count)
        }
        return result
    }
}
