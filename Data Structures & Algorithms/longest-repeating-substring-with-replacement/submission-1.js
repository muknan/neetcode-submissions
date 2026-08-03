class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxf = 0;
        let max = 0;
        const c = {}

        for(let r=0;r<s.length;r++){
            c[s[r]] = (c[s[r]] || 0) + 1;
            maxf = Math.max(maxf, c[s[r]]);
            while((r-l+1)-maxf>k){
                c[s[l]]--;
                l++;
            }
            max = Math.max(max, r-l+1)
        }
        return max;
    }
}
