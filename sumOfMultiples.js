/**
 * 2652. 倍数求和
 * https://leetcode.cn/problems/sum-multiples/
 */


/**
 * 68ms  79.51%
 * 41.3MB  95.49%
 */
var sumOfMultiples = function (n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            sum += i
        }

    }

    return sum

};