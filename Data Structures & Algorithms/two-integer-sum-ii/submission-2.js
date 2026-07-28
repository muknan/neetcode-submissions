class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(n, t) {
    //     let i = 0;
    //     let res = 0;
    //     for (i=0;i<n.length;i++){
    //         res = t - n[i];
    //         for(let j=i+1;j<n.length;j++){
    //             if(res===n[j])
    //             return [i+1, j+1];
    //         }
    //     }
    // }
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length-1;

        while(start<end){
            let sum = numbers[start] + numbers[end];

            if(sum===target) return [start+1,end+1];
            if(sum>target) end--;
            else start++;
        }
        return [];
    }
}
