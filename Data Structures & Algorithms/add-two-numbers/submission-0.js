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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode()
        let cur = dummy
        
        let carry = 0
        while(l1 || l2 || carry){
            let v1 = l1 && l1.val || 0;
            let v2 = l2 && l2.val || 0;

            let sum = v1 + v2 + carry;
            carry = Math.trunc(sum / 10)
            sum = sum % 10
            cur.next = new ListNode(sum)

            cur = cur.next

            if(l1) l1=l1.next
            else null

            if(l2) l2=l2.next
            else null
        }
        return dummy.next
    }
}
