class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stk = []

        for(const c of tokens){
            if(!isNaN(c)) stk.push(Number(c))

            else{
            let r = stk.pop()
            let l = stk.pop()

            if(c==='+') stk.push(l+r)
            if(c==='-') stk.push(l-r)
            if(c==='*') stk.push(l*r)
            if(c==='/') stk.push(Math.trunc(l/r))}
        }
        return stk.at(-1)
    }
}
