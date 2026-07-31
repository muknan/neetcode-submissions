class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    twoSum(j,target,nums){
        let k = nums.length-1;
        let res = [];

        while(j<k){
            let l = nums[j];
            let h = nums[k];
            if(l+h>target) k--;
            else if(l+h<target) j++;
            else{
                res.push([(target*-1),l,h]);
                while(j<k&&nums[k]===nums[k-1]) k--;
                while(j<k&&nums[j]===nums[j+1]) j++;
                k--;
                j++;
            }
        }
        return res;
    }


    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const result = [];

        for(let i = 0 ; i < nums.length-2 ; i++){
            if(nums[i]===nums[i-1]) continue;
            let target = nums[i] * -1;

            let subRes = this.twoSum(i+1,target,nums);
            result.push(...subRes);
        }
        return result;
    }
}
