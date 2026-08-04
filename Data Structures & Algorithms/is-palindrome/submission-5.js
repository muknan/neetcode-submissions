class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(c){
        return ((c>='a'&&c<='z') || (c>='A'&&c<='Z') || (c>='0'&&c<='9'));
    }
    isPalindrome(s) {
        // const str = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        let str='';
        for(let c of s){
            if(this.isAlphaNumeric(c)){
                str+=c.toLowerCase();
            }
        }

        return str === str.split('').reverse().join('');

        // let start = 0;
        // let end = str.length-1;

        // while(start<=end){
        //     if(str[start]===str[end]){
        //         start++;
        //         end--;
        //     }
        //     else return false;
        // }
        // return true;
    }
}
