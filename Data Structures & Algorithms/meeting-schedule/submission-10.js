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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (!intervals.length) return true;

    const sorted = intervals.sort((a, b) => a.start - b.start);
    console.log(sorted)
    
    for (let i = 1; i < sorted.length; i++) {
        let currInterval = sorted[i - 1]
        let nextInterval = sorted[i]

        if(currInterval.end > nextInterval.start){
            return false
        }
    }

    return true;
    }
}
