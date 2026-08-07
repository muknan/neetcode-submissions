class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let h = nums.length-1

        while (l<=h){
        let mid = Math.ceil((l + h) / 2)

        if(nums[mid]===target) return mid
        if(target<nums[mid]) h=mid-1
        else l = mid+1
        }
        return -1;
    }
}
