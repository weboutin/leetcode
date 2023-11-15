/**
 * 2903. 找出满足差值条件的下标 I
 * https://leetcode.cn/problems/find-indices-with-index-and-value-difference-i/
 */

/**
 * 72ms  46.62%
 * 41.85mb  30.83%
 */
var findIndices = function (nums, indexDifference, valueDifference) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i; j < nums.length; j++) {


            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j]
            }

        }

    }

    return [-1, -1]
};