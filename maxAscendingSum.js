/**
 * 1800. 最大升序子数组和
 * https://leetcode.cn/problems/maximum-ascending-subarray-sum/
 */


/**
 * 52ms  94.34%
 * 40.9MB  94.34%
 */
var maxAscendingSum = function (nums) {


    let idx = 0
    let max = 0

    while (idx < nums.length) {

        let tmpCounter = nums[idx]

        if (nums[idx] < nums[idx + 1]) {
            while (nums[idx] < nums[idx + 1]) {
                idx++
                tmpCounter += nums[idx]
            }
        } else {
            idx++
        }

        max = Math.max(tmpCounter, max)
    }

    return max
};


nums = [10, 20, 30, 5, 10, 50]

nums = [12, 17, 15, 13, 10, 11, 12] // 33

// nums = [12]


ans = maxAscendingSum(nums)
console.log(ans)