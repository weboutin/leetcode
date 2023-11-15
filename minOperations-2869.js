/**
 * 2869. 收集元素的最少操作次数
 * https://leetcode.cn/problems/minimum-operations-to-collect-elements/
 */



/**
 * 60ms  89.53%
 * 41.37mb  36.05%
 */
var minOperations = function (nums, k) {

    let set = new Set()

    let count = 0

    for (let i = nums.length - 1; i >= 0; i--) {

        count++

        if (nums[i] <= k) {

            set.add(nums[i])

            if (set.size == k) {
                return count
            }

        }

    }

};