// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const oldCopy = new Map()
        oldCopy.set(null, null)
        let cur = head

        while(cur)
        {
            const copy = new Node(cur.val)
            oldCopy.set(cur, copy)
            cur = cur.next
        }

        cur = head

        while(cur){
            const copy = oldCopy.get(cur)
            copy.next = oldCopy.get(cur.next)
            copy.random = oldCopy.get(cur.random)
            cur = cur.next
        }

        return oldCopy.get(head)
    }
}
