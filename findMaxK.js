/**
 * https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative/?envType=list&envId=bxbmnec
 */




/**
 * 80ms  55.58%
 * 46MB  5.45%
 */
var findMaxK = function (nums) {

    let map = {}

    let maxValue = -1

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = 1
    }

    for (let i = 0; i < nums.length; i++) {
        if (map[-nums[i]]) {
            maxValue = Math.max(Math.abs(nums[i]), maxValue)
        }
    }

    return maxValue
};