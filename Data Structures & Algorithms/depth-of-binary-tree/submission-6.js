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
        // if(!root) return 0

        const stack = [[root, 1]]
        let res = 0

        while(stack.length){
            let [node, depth] = stack.pop()

            if(node){
                res = Math.max(res, depth)
                stack.push([node.right, depth + 1])
                stack.push([node.left, depth + 1])
            }
        }
        return res

//  BFS
        // let level = 0
        
        // const queue = [root]

        // while(queue.length){
        //     const size = queue.length
        //     for(let i=0;i<size;i++){
        //         let node = queue.shift()
        //         if(node.left) queue.push(node.left)
        //         if(node.right) queue.push(node.right)
        //     }
        //     level++
        // }

        // return level


// DFS
        // return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
}
