/**
 * 485. 最大连续 1 的个数
 * https://leetcode.cn/problems/max-consecutive-ones/
 */


/**
 * 68ms  68.55%
 * 43.4MB  83.82%
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            tmp++
            if (tmp > max) max = tmp
        } else {
            tmp = 0
        }
    }
    return max
};