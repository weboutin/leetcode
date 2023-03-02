

/**
 * 打家劫舍
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnq4km/
 */


/**
 * 60ms 64.09%
 * 41.1 MB 53.28%
 * dp[i] 表示到了第i号房偷到的最高金额
 * dp[i] = Math.max(dp[i-2]  + nums[i], dp[i-1])
 */
var rob = function (nums) {
    let dp = [nums[0] || 0, Math.max(nums[0], nums[1]) || 0, Math.max(nums[0] + nums[2], nums[1]) || 0]
    let max = Math.max(...dp)

    for (let i = 0; i < nums.length; i++) {
        if (i <= 2) continue
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        max = Math.max(dp[i], max)
    }

    return max
};

var rob = function (nums) {
    let dp = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }

    return dp[nums.length - 1]
};

// dp 转换公式有问题，旁边不一定要偷的

// nums = [2, 7, 9, 3, 1]
nums = [1, 3, 1, 3, 100]
nums = [1, 2, 3, 1]
nums = [0]
nums = [6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3]


const result = rob(nums)

console.log(result)
