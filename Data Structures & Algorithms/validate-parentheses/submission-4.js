class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const p = {')':'(', ']':'[', '}':'{'};

        for(const c of s){
            if(p[c]){
                if(stack && stack.at(-1)===p[c])
                    stack.pop()
                else
                    return false
            }
            else{
                stack.push(c);
            }
        }
        return stack.length===0;
    }
}
