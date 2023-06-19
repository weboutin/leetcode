/**
 * 1991. 找到数组的中间位置
 * https://leetcode.cn/problems/find-the-middle-index-in-array/
 */



/**
 * 56ms  92.92%
 * 41.1MB  67.26%
 */
var findMiddleIndex = function (nums) {
    let leftSum = 0;
    let rightSum = 0
    for (let i = 1; i < nums.length; i++) {
        rightSum += nums[i]
    }
    if (leftSum == rightSum) {
        return 0
    }
    for (let i = 1; i < nums.length; i++) {
        leftSum += nums[i - 1]
        rightSum -= nums[i]
        if (leftSum == rightSum) {
            return i
        }
    }

    return -1
};