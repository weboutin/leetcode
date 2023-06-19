/**
 * 2176. 统计数组中相等且可以被整除的数对
 * https://leetcode.cn/problems/count-equal-and-divisible-pairs-in-an-array/
 */




/**
 * 76ms  15.79%
 * 41.3MB  63.16%
 */
var countPairs = function (nums, k) {

    let counter = 0

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length + 1; j++) {
            if (nums[i] == nums[j] && i * j % k == 0) {
                counter++
            }
        }
    }
    return counter
};