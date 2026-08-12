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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        let first
        let second
        let prev
        let tmp
        let t1
        let t2

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        
        second = slow.next
        prev = slow.next = null

        while(second){
            tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }

        first = head
        second = prev

        while(second){
            t1 = first.next
            t2 = second.next
            first.next = second
            second.next = t1

            first = t1
            second = t2
        }

    }
}
