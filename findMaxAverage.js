/**
 * 643. 子数组最大平均数 I
 * https://leetcode.cn/problems/maximum-average-subarray-i/
 */

/**
 * 116ms  33.78%
 * 53.1MB  58.11%
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    let max = sum
    for (let i = 1; i <= nums.length - k; i++) {
        sum = sum - nums[i - 1] + nums[i + k - 1]
        max = Math.max(sum, max)
    }

    return max / k
};



nums = [1, 12, -5, -6, 50, 3], k = 4


nums = [0, 1, 1, 3, 3], k = 4

ans = findMaxAverage(nums, k)
console.log(ans)