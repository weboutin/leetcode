/**
 * 1848. 到目标元素的最小距离
 * https://leetcode.cn/problems/minimum-distance-to-the-target-element/
 */



/**
 * 56ms  82.98%
 * 41.4MB  76.60%
 */
var getMinDistance = function (nums, target, start) {
    if (nums[start] == target) return 0

    let left = start - 1
    let right = start + 1

    while (1) {
        if (nums[left] == target) {
            return start - left
        }

        if (nums[right] == target) {
            return right - start
        }
        if (left > 0) {
            left--
        }
        if (right < nums.length) {
            right++
        }
    }
};

nums = [1, 2, 3, 4, 5], target = 5, start = 3

ans = getMinDistance(nums, target, start)
console.log(ans)