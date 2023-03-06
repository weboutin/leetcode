/**
 * 521. 最长特殊序列 Ⅰ
 * https://leetcode.cn/problems/longest-uncommon-subsequence-i/
 */


/**
 * 44ms  100.00%
 * 40.8MB  88.24%
 */
var findLUSlength = function (a, b) {
    if (a == b) return -1
    return Math.max(a.length, b.length)
};