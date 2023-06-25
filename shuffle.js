/**
 * 1470. 重新排列数组
 * https://leetcode.cn/problems/shuffle-the-array/?envType=list&envId=bxbmnec
 */


/**
 * 72ms  46.94%
 * 43.6MB  23.13%
 */
var shuffle = function (nums, n) {
    let result = []

    for (let i = 0; i < n; i++) {
        result.push(nums[i])
        result.push(nums[i + n])
    }

    return result

};