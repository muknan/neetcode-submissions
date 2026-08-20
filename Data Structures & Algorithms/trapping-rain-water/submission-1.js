class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max = 0;
        let l = 0;
        let h = height.length - 1;
        let t;
        let s;
        let maxL = height[l];
        let maxH = height[h];

        while(l<h){

            if(maxL<maxH) {l++; t=height[l];}
            else {h--; t=height[h];}
            s = (Math.min(maxL,maxH) - t) < 1 ? 0 : Math.min(maxL,maxH) - t;
            if(height[l]>maxL) maxL=height[l];
            if(height[h]>maxH) maxH=height[h];
            max+=s;
        }
        return max;
    }
}
