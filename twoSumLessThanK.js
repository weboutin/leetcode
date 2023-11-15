/**
 * 1099. 小于 K 的两数之和
 * https://leetcode.cn/problems/two-sum-less-than-k/
 */



/**
 * 64ms  57.14%
 * 40.09mb  96.43%
 */
var twoSumLessThanK = function (nums, k) {

    let result = -1


    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] < k) {
                result = Math.max(result, nums[i] + nums[j])
            }

        }

    }



    return result

};