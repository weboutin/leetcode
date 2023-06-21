/**
 * 2027. 转换字符串的最少操作次数
 * https://leetcode.cn/problems/minimum-moves-to-convert-string/
 */




/**
 * 60ms  68.89%
 * 40.9MB  91.11%
 */
var minimumMoves = function (s) {

    let counter = 0

    let idx = 0
    while (idx < s.length) {
        if (s[idx] == 'X') {
            idx = idx + 3
            counter++
        } else {
            idx++
        }

    }

    return counter



};