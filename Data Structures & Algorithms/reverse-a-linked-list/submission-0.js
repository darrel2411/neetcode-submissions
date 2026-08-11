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
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null
        let currNode = head

        while(currNode != null){
            let nextTemp = currNode.next
            currNode.next = previous
            previous = currNode
            currNode = nextTemp

            console.log(previous)
        }

        return previous

    }
}
