/**
 * https://leetcode-cn.com/problems/search-insert-position/submissions/
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (target === nums[i] || target < nums[i]) {
          return i;
      }
  }
  return nums.length;
};