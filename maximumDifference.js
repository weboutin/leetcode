/**
 * 2016. 增量元素之间的最大差值
 * https://leetcode.cn/problems/maximum-difference-between-increasing-elements/?envType=list&envId=bxbmnec
 */


/**
 * 52ms  96.55%
 * 41.1MB  48.28%
 */
var maximumDifference = function (nums) {
    let max = -1
    let min = Number.MAX_VALUE

    for (let i = 0; i < nums.length - 1; i++) {
        min = Math.min(nums[i], min)

        if (nums[i + 1] - min > 0) {
            max = Math.max(max, nums[i + 1] - min)
        }

    }

    return max
};

nums = [7, 1, 5, 4]

//9 
nums = [1, 5, 2, 10]


ans = maximumDifference(nums)
console.log(ans)