/**
 * 1295. 统计位数为偶数的数字
 * https://leetcode.cn/problems/find-numbers-with-even-number-of-digits/?envType=list&envId=bxbmnec
 */



/**
 * 64ms  64.00%
 * 41.7MB  86.00%
 */
var findNumbers = function (nums) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {

    if (nums[i].toString().length % 2 == 0) {
      count++
    }

  }


  return count
};