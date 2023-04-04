

/**
 * 704. 二分查找
 * https://leetcode.cn/problems/binary-search/
 */


/**
 * 64ms  66.20%
 * 43.8MB  79.96%
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = parseInt((right - left) / 2) + left

        if (target == nums[mid]) {
            return mid
        }
        if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
};

nums = [-1, 0, 3, 5, 9, 12], target = 9
nums = [-1, 0, 3, 5, 9, 12], target = 2

nums = [-1, 0], target = 0

ans = search(nums, target)