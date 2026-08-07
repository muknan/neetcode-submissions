class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, l=0, h=nums.length-1) {

        if(l>h) return -1

        let mid = Math.ceil((l + h) / 2)

        if(nums[mid]===target) return mid
        if(target<nums[mid]) return this.search(nums, target, l, mid-1)
        else return this.search(nums, target, mid+1, h)

        return -1;
    }
}
