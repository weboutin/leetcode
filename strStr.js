/**
 * https://leetcode-cn.com/problems/implement-strstr/submissions/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (needle.length == 0) {
      return 0;
  }
  let haystackArr = haystack.split('');
  let needleArr = needle.split('');
  for (let i = 0; i < haystackArr.length; i++) {
      if (haystackArr[i] == needleArr[0]) {
          if (needleArr.length == 1) {
              return i;
          }
          let flag = i;
          for (let j = 1; j < needleArr.length; j++) {
              if (haystackArr[++flag] != needleArr[j]) {
                  break;
              }
              if (j == needleArr.length - 1) {
                  return i;
              }
          }
      }
  }
  return -1;
};