/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // let fast = head
        // let slow = head

        // while(fast && fast.next !== null){
        //     slow = slow.next
        //     fast = fast.next.next
        //     if(slow === fast) {
        //         return true
        //     }
        // }

        // return false

        let visited = new Set()
        let currNode = head

        while(currNode !== null){
            if(visited.has(currNode)){
                return true
            }
            visited.add(currNode)
            currNode = currNode.next
        }
        return false
    }
}
