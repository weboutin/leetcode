
/**
 * 2395. 和相等的子数组
 * https://leetcode.cn/problems/find-subarrays-with-equal-sum/
 */



/**
 * 52ms  95.78%
 * 41.1MB  51.06%
 */
var findSubarrays = function (nums) {

    let set = new Set()

    for (let i = 0; i < nums.length - 1; i++) {

        let val = nums[i] + nums[i + 1]

        if (set.has(val)) {
            return true
        } else {
            set.add(val)
        }


    }

    return false

};