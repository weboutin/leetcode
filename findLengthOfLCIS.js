/**
 * 674. 最长连续递增序列
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 */



/**
 * 44ms  99.88%
 * 41.5MB  63.97%
 */
var findLengthOfLCIS = function (nums) {
    let max = 1
    let tmp = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            tmp++
        } else {
            max = Math.max(max, tmp)
            tmp = 1
        }

    }
    return Math.max(max, tmp)
};

nums = [1, 3, 5, 7]

nums = [1, 3, 5, 4, 7]
ans = findLengthOfLCIS(nums)
console.log(ans)