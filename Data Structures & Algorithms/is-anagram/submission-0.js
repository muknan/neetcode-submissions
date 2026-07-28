class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const res = [...s].sort().join('') === [...t].sort().join('');
      return res;
    }
}
