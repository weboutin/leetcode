/**
 * 1523. 在区间范围内统计奇数数目
 * https://leetcode.cn/problems/count-odd-numbers-in-an-interval-range/
 */



/**
 * 2540ms  25.87%
 * 40.8MB  83.22%
 */
var countOdds = function (low, high) {

    let count = 0


    for (let i = low; i <= high; i++) {
        if (i % 2 != 0) count++

    }

    return count

};