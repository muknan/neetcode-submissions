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
        if(!root) return 0

        let lDepth=0
        let rDepth=0

        if(root && !root.left && !root.right) return 1

        if(root.left){
             lDepth = this.maxDepth(root.left) + 1
        }

        if(root.right){
             rDepth = this.maxDepth(root.right) + 1
        }

        return Math.max(lDepth,rDepth)
    }
}
