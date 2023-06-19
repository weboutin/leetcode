/**
 * 2006. 差的绝对值为 K 的数对数目
 * https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k/
 */

/**
 * 60ms  89.55%
 * 41.4MB  46.27%
 */
var countKDifference = function (nums, k) {
    let counter = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[j] - nums[i]) == k) {
                counter++
            }
        }
    }

    return counter
};

//也有用 hash 的写法，和两数之和类似