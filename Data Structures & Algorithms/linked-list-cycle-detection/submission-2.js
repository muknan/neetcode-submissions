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
        let i = head;
        let j = head;

        while(i && j){
            i = i.next;
            j = j.next?.next;

            if(i && j && i.val===j.val) return true
        }
        return false
    }
}
