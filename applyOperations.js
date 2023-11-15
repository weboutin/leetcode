/**
 * 2460. 对数组执行操作
 * https://leetcode.cn/problems/apply-operations-to-an-array/
 */



/**
 * 72ms  52.61%
 * 42.36mb  16.86%
 */
var applyOperations = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] == nums[i + 1]) {

            nums[i] = nums[i] * 2

            nums[i + 1] = 0

        }

    }

    const result = []
    const zero = []

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] != 0) {
            result.push(nums[i])
        } else {
            zero.push(0)
        }
    }

    return result.concat(zero)

};