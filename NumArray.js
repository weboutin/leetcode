/**
 * 303. 区域和检索 - 数组不可变
 * https://leetcode.cn/problems/range-sum-query-immutable/
 */

/**
 * 176ms  22.64%
 * 47MB  100.0%
 */
var NumArray = function (nums) {
    this.nums = nums
};

NumArray.prototype.sumRange = function (left, right) {
    let sum = 0
    for (let i = left; i <= right; i++) {
        sum += this.nums[i]
    }
    return sum
};
