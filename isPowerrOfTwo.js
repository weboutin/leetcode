/**
 * 231. 2 的幂
 * https://leetcode.cn/problems/power-of-two/
 */

/**
 * 68ms  70.05%
 * 42.3MB  41.12%
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true
    let sum = 1
    while (sum < n) {
        sum = sum * 2
    }
    return n == sum
};

s = isPowerOfTwo(3)
console.log(s)