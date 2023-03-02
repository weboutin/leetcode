/**
 * 342. 4的幂
 * https://leetcode.cn/problems/power-of-four/
 */


/**
 * 64ms  81.35%
 * 41.6MB  61.35%
 */
var isPowerOfFour = function(n) {

    if (n == 1) return true
    let sum = 1
    while (sum < n) {
        sum = sum * 4
    }
    return n == sum

};