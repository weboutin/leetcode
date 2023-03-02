/**
 * 最大子序和
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn3cg3/
 */



/**
 * 76 ms 84.82%
 * 53.2 MB 20.77%
 * dp[i] i 表示最长子序的最右一个下标
 * dp[i] 表示到i位的最长子序列
 * dp[i] = dp[i-1] + nums[i]
 */
var maxSubArray = function (nums) {
    let dp = [nums[0]]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        //如果dp[i-1]小于0，那么dp[i]就是自己
        dp[i] = Math.max(dp[i - 1], 0) + nums[i]
        max = Math.max(dp[i], max)
    }
    return max
};


nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]



const result = maxSubArray(nums)


console.log(result)