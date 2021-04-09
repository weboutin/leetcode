/**
 * https://leetcode-cn.com/problems/longest-common-prefix/submissions/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {return "";}
  let result = "";
  for (let i = 0; i < strs[0].split('').length; i++) {
      let current = strs[0].split('')[i];
      for (let j = 1; j < strs.length; j++) {
          let other = strs[j].split('')[i];
          if (current != other) {
              return result;
          }
      }
      result = result + current;
  }
  return result;
};