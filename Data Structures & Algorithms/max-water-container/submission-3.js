class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea=0;
        let i = 0;
        let j = heights.length-1;

        while(i<j){
            let width = j-i;
            let a = Math.min(heights[i],heights[j]) * width;
            maxArea = Math.max(a, maxArea);

            if(heights[i]<heights[j]){
                i++;
            }
            else{
                j--;
            }
        }
        return maxArea;
    }
}
