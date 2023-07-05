/**
 * 2670. 找出不同元素数目差数组
 * https://leetcode.cn/problems/find-the-distinct-difference-array/
 */



/**
 * 152ms  57.72%
 * 49.6MB  25.20%
 */
var distinctDifferenceArray = function (nums) {

  const diff = []

  for (let i = 0; i < nums.length; i++) {

    diff[i] = new Set(nums.slice(0, i + 1)).size - new Set(nums.slice(i + 1)).size

  }

  return diff
};





nums = [1, 2, 3, 4, 5]
nums = [3, 2, 3, 4, 2]

ans = distinctDifferenceArray(nums)

console.log(ans)