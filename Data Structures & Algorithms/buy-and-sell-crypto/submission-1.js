class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max=0;
        let i=0;
        let j=1;
        let t;
        while(j<prices.length){
            t=prices[j]-prices[i]
            if(t<0){
                i=j;
                }
            else{
                max = Math.max(t,max);
            }
            j++;
        }
        return max;
    }
}
