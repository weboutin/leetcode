/**
 * 2733. 既不是最小值也不是最大值
 * https://leetcode.cn/problems/neither-minimum-nor-maximum/
 */



/**
 * 160ms  57.70%
 * 50.6MB  5.22%
 */
var findNonMinOrMax = function (nums) {

  if (nums.length <= 2) {
    return -1
  }

  return nums.sort((a, b) => a - b)[1]

};