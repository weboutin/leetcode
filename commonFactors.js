/**
 * 2427. 公因子的数目
 * https://leetcode.cn/problems/number-of-common-factors/
 */



/**
 * 60ms  73.13%
 * 40.8MB  70.21%
 */
var commonFactors = function (a, b) {

    const min = Math.min(a, b)

    let count = 0

    for (let i = 1; i <= min; i++) {
        if (a % i == 0 && b % i == 0) {
            count++
        }

    }

    return count

};