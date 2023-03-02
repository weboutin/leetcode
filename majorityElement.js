/**
 * 169. 多数元素
 * https://leetcode.cn/problems/majority-element/
 */


/**
 * 56ms  95.77%
 * 42.8MB  43.107%
 */
var majorityElement = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
        if (map[nums[i]] > nums.length / 2) {
            return nums[i]
        }

    }
};

/**
 * 90ms  87.34%
 * 43.7MB  12.71%
 */
var majorityElement = function (nums) {
    nums = nums.sort((a, b) => a - b)
    return nums[parseInt(nums.length/2)]
};