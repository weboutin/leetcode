/**
 * https://leetcode-cn.com/problems/valid-palindrome/submissions/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length == 0) {
    return true;
  }
  let arr = s.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90)
      || (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122)
      || (arr[i].charCodeAt() >= 48 && arr[i].charCodeAt() <= 57)
    ) {
      result.push(arr[i].toLocaleLowerCase());
    }
  }
  if (result.length == 0) {
    return true;
  }
  for (let i = 0; i < parseInt(result.length / 2); i++) {
    if (result[i] != result[result.length - 1 - i]) {
      return false;
    }
  }
  return true;
};