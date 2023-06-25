/**
 * 1480. 一维数组的动态和
 * https://leetcode.cn/problems/running-sum-of-1d-array/?envType=list&envId=bxbmnec
 */



/**
 * 60ms  79.74%
 * 41.3MB  77.80%
 */
var runningSum = function (nums) {
    let count = 0

    const result = []

    for (let i = 0; i < nums.length; i++) {
        count += nums[i]

        result.push(count)
    }

    return result

};