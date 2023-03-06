/**
 * 806. 写字符串需要的行数
 * https://leetcode.cn/problems/number-of-lines-to-write-string/
 */

/**
 * 30ms  80.61%
 * 42MB  11.23%
 */
var numberOfLines = function (widths, s) {
    let count = 1
    let line = 0
    for (let i = 0; i < s.length; i++) {
        if ((line + widths[s[i].charCodeAt() - 97]) <= 100) {
            line += widths[s[i].charCodeAt() - 97]
        } else {
            count++
            line = widths[s[i].charCodeAt() - 97]
        }
    }
    return [count, line]
};



widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
s = "abcdefghijklmnopqrstuvwxyz"



ans = numberOfLines(widths, s)

console.log(ans)