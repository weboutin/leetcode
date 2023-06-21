/**
 * 1913. 两个数对之间的最大乘积差
 * https://leetcode.cn/problems/maximum-product-difference-between-two-pairs/
 */



/**
 * 88ms  60.46%
 * 43.6MB  41.86%
 */
var maxProductDifference = function (nums) {

    nums.sort((a, b) => a - b)

    n = nums.length

    return (nums[n - 1] * nums[n - 2]) - (nums[0] * nums[1])

};