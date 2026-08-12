/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        /* first method use DFS traversal */
        // // console.log(root)
        // // always handle best case
        // if(root === null) return 0

        // return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))

        /* second method use iterative DFS */
        let stack = [[root, 1]]
        let result = 0

        while(stack.length > 0){
            const [node, depth] = stack.pop()

            if(node){
                result = Math.max(result, depth)
                stack.push([node.left, depth + 1])
                stack.push([node.right, depth + 1])
            }
        }
        return result

    }
}
