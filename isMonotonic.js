/**
 * 896. 单调数列
 * https://leetcode.cn/problems/monotonic-array/
 */


/**
 * 100ms  25.94%
 * 52.2MB  56.13%
 */
var isMonotonic = function (nums) {
    let flag = null
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] == nums[i]) {
            continue
        }

        let tmp = nums[i + 1] > nums[i]

        if (flag != null && tmp != flag) {
            return false
        }

        flag = tmp
    }
    return true
};



nums = [1, 3, 2]
nums = [6, 5, 4, 4]
nums = [1, 2, 2, 3]
// nums = [2, 2]
// nums = [1, -1, -1, 3]

// [11, 11, 9, 4, 3, 3, 3, 1, -1, -1, 3, 3, 3, 5, 5, 5]

ans = isMonotonic(nums)
console.log(ans)