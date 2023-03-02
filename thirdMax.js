/**
 * 414. 第三大的数
 * https://leetcode.cn/problems/third-maximum-number/
 */

/**
 * 64ms  62.78%
 * 41.3%  88.89%
 */
var thirdMax = function (nums) {
    nums = nums.sort((a, b) => b - a)
    let max = nums[0]
    let s = new Set()
    for (let i = 0; i < nums.length; i++) {
        s.add(nums[i])
        if (s.size == 3) {
            return nums[i]
        }
    }

    return max
};

nums = [2, 2, 3, 1]


s = thirdMax(nums)
console.log(s)