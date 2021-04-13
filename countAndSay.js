/**
 * https://leetcode-cn.com/problems/count-and-say/submissions/ 
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) {
    return "1"
  }
  //上一个数字
  let lastResult = countAndSay(n - 1);
  let arr = lastResult.toString().split("");
  let count = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      result.push(count.toString());
      result.push(arr[i].toString());
      count = 1;
    }
  }
  return result.join('');
};