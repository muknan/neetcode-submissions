class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let l = 1
        let r = Math.max(...piles)

        while(l<=r){
            let res = 0;
            let m = Math.floor((l + r)/2)

            for(let i=0;i<piles.length;i++){
                res += Math.ceil(piles[i]/m)
            }

            if(res<=h){
                r = m - 1
            }
            else{
                l = m + 1
            }
        }
        return l;
    }
}
