/**
 * 2278. 字母在字符串中的百分比
 * https://leetcode.cn/problems/percentage-of-letter-in-string/
 */


/**
 * 56ms  92.98%
 * 41.1MB  36.84%
 */
var percentageLetter = function (s, letter) {

    let count = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == letter) count++
    }

    return Math.floor(count / s.length * 100)
};