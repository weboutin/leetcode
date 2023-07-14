/**
 * 1920. 基于排列构建数组
 * https://leetcode.cn/problems/build-array-from-permutation/
 */


/**
 * 80ms  55.17%
 * 45.1MB  17.24%
 */
var buildArray = function (nums) {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]]
    }


    return result
};