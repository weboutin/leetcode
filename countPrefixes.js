/**
 * 2255. 统计是给定字符串前缀的字符串数目
 * https://leetcode.cn/problems/count-prefixes-of-a-given-string/
 */


/**
 * 76ms  9.09%
 * 40.35MB  70.91%
 */
var countPrefixes = function (words, s) {
    let count = 0

    for (let i = 0; i < words.length; i++) {

        if (s.indexOf(words[i]) == 0) {
            count++
        }

    }

    return count

};