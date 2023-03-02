/**
 * 263. 丑数
 * https://leetcode.cn/problems/ugly-number/
 */

/**
 * 68ms  68.40%
 * 41.5MB  86.20%
 */
var isUgly = function (n) {


    while ((n % 5 == 0 || n % 3 == 0 || n % 2 == 0) && n != 0) {
        if (n % 5 == 0) {
            n = n / 5
        }
        if (n % 3 == 0) {
            n = n / 3
        }
        if (n % 2 == 0) {
            n = n / 2
        }

    }

    return n == 1
};



n = 6
n = 14
n = 1

s = isUgly(n)

console.log(s)