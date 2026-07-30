class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let longest = 0

        for(const n of set){
            if(!set.has(n-1)){
                let length = 1
                let current = n

                while(set.has(current+1)){
                    length++
                    current++
                }
                longest = Math.max(longest,length)
            }
        }
        return longest
    }
}
