class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i=0;i<nums.length;i++){
            if(seen.get(target-nums[i])){
                return [i, nums.indexOf(target-nums[i])];
            }
            seen.set(nums[i],true);
        }
    }
}
