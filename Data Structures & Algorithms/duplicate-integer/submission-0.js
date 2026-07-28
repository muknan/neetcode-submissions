class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);

      if (seen.get(nums[i]) > 1) return true;
    }
    return false;
  }
}