class Node{
    constructor(key, val=null){
        this.key = key
        this.val = val
        this.prev = this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = {}
        this.left = new Node(0)
        this.right = new Node(0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    /**
     * @param {number} key
     * @return {number}
     */

    remove(node){
        let prev = node.prev
        let nxt = node.next
        prev.next = nxt
        nxt.prev = prev
    }

    insert(node){
        let prev = this.right.prev
        let nxt = this.right
        prev.next = nxt.prev = node
        node.next = nxt
        node.prev = prev
    }

    get(key) {
        if(this.cache[key]){
            this.remove(this.cache[key])
            this.insert(this.cache[key])
            return this.cache[key].val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache[key]){
            this.remove(this.cache[key])
        }
        this.cache[key] = new Node(key, value)
        this.insert(this.cache[key])

        if(Object.keys(this.cache).length>this.capacity){
            let lru = this.left.next
            this.remove(lru)
            delete this.cache[lru.key]
        }
    }
}
