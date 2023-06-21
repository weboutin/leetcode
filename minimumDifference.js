/**
 * 1984. 学生分数的最小差值
 * https://leetcode.cn/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 */


/**
 * 76ms  57.02%
 * 43.1MB  62.28%
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b)
    let min = Number.MAX_VALUE
    for (let i = 0; i <= nums.length - k; i++) {

        min = Math.min(nums[i + k - 1] - nums[i], min)

    }
    return min
};


nums = [9, 4, 1, 7], k = 2


ans = minimumDifference(nums, k)
console.log(ans)