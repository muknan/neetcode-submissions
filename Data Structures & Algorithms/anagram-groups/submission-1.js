class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(const c of strs){
            let key = c.split('').sort().join('')
            // if(!map.has(key)) map.set(key,[])
            map.set(key, (map.get(key)||[]))
            map.get(key).push(c)
        }
        return Array.from(map.values())
    }
}
