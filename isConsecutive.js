/**
 * 2229. 检查数组是否连贯
 * https://leetcode.cn/problems/check-if-an-array-is-consecutive/
 */


/**
 * 184ms  100.00%
 * 49.46mb  100.00%
 */
var isConsecutive = function (nums) {

    nums.sort((a, b) => a - b)


    for (let i = 0; i < nums.length; i++) {

        if (nums[i] != i + nums[0]) {
            return false
        }


    }

    return true

};