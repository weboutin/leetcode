/**
 * 3019. 按键变更的次数
 * https://leetcode.cn/problems/number-of-changing-keys/
 */




/**
 * 76ms  17.11%
 * 49.95mb  94.79%
 */
var countKeyChanges = function (s) {

    let count = 0

    s = s.toLowerCase()

    for (i = 1; i < s.length; i++) {
        if (s[i] != s[i - 1]) {
            count++
        }
    }

    return count

};