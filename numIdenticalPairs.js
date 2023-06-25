/**
 * 1512. 好数对的数目
 * https://leetcode.cn/problems/number-of-good-pairs/?envType=list&envId=bxbmnec
 */



/**
 * 64ms  46.99%
 * 40.7MB  89.07%
 */
var numIdenticalPairs = function (nums) {
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++
      }
    }
  }
  return count

};


nums = [1, 2, 3, 1, 1, 3]

ans = numIdenticalPairs(nums)