/**
 * 628. 三个数的最大乘积
 * https://leetcode.cn/problems/maximum-product-of-three-numbers/
 */





/**
 * 104ms  78.09%
 * 45.8MB  13.27%
 */
var maximumProduct = function (nums) {


    if (nums.length == 3) return nums[0] * nums[1] * nums[2]

    let n = nums.length

    nums = nums.sort((a, b) => a - b)

    return Math.max(nums[n - 3] * nums[n - 2] * nums[n - 1], nums[0] * nums[1] * nums[n - 1])


};