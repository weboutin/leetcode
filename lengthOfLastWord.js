/**
 * https://leetcode-cn.com/problems/length-of-last-word/submissions/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length == 0) {
    return 0;
  }
  let arr = s.toString().split('');
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != " ") {
      count++;
    } else if (count > 0) {
      return count;
    }
  }
  return count;
};