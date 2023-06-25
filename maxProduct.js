/**
 * 1464. 数组中两元素的最大乘积 
 * https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/?envType=list&envId=bxbmnec
 */





/**
 * 60ms  90.29%
 * 41.4MB  60.19%
 */
var maxProduct = function (nums) {
    nums.sort((a, b) => b - a)

    return (nums[0] - 1) * (nums[1] - 1)
};