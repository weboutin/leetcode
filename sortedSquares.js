/**
 * 977. 有序数组的平方
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 */



/**
 * 100ms 60.24%
 * 47.3MB  61.97%
 */
var sortedSquares = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] * nums[i])
    }

    return result.sort((a, b) => a - b)
};