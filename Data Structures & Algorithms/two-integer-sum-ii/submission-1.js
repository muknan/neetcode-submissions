class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(n, t) {
        let i = 0;
        let res = 0;
        for (i=0;i<n.length;i++){
            res = t - n[i];
            for(let j=i+1;j<n.length;j++){
                if(res===n[j])
                return [i+1, j+1];
            }
        }
    }
}
