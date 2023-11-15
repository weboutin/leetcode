/**
 * 2656. K 个元素的最大和
 * https://leetcode.cn/problems/maximum-sum-with-exactly-k-elements/
 */


/**
 * 160ms  10.43%
 * 46.44MB  31.28%
 */
var maximizeSum = function (nums, k) {

    nums.sort((a, b) => b - a)

    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[0]
        nums[0]++
    }


    return sum

};