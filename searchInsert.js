/**
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/
 */

/**
 * 56ms  83.91%
 * 41.1MB  62.82%
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i
    }
    return nums.length
};



nums = [1, 3, 5, 6], target = 2

let result = searchInsert(nums, target)

console.log(result)