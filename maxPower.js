/**
 * 1446. 连续字符
 * https://leetcode.cn/problems/consecutive-characters/?envType=list&envId=bxbmnec
 */



/**
 * 68ms  52.05%
 * 41.5MB  82.19%
 */
var maxPower = function (s) {
  let max = 0
  let tmpCount = 0
  let curr = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] == curr) {
      tmpCount++
    } else {
      curr = s[i]
      tmpCount = 1
    }
    max = Math.max(tmpCount, max)
  }
  return max
};