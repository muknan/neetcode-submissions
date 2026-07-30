class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res=[]
        const visiting = new Map()
  

        for(let i=0;i<nums.length;i++){
            let mul=1
            visiting.set(i,1)
            for(let j=0;j<nums.length;j++){
                if(visiting.get(j)) continue
                else mul*=nums[j]
            }
            visiting.set(i,0)
            res.push(mul)
        }
        return res
    }
}
