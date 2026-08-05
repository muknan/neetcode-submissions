class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const res = Array(temperatures.length).fill(0);

    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && stack.at(-1)[0] < temperatures[i]) {
        const [pTemp, pIndex] = stack.pop();
        res[pIndex] = i - pIndex;
      }
      stack.push([temperatures[i], i]);
    }
    return res;
  }
}