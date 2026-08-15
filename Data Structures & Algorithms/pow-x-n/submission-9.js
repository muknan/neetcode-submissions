class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    fastPow(x, n){
        if(n===0) return 1
        let half = this.fastPow(x, Math.trunc(n/2))

        if(n%2===0)
            return half * half
        else
            return half * half * x

    }

    myPow(x, n) {
        let exp = n

        if(exp<0)
            return this.fastPow(1/x, -exp)
        return this.fastPow(x, exp)
    }
}
