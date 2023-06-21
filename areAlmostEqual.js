/**
 * 1790. 仅执行一次字符串交换能否使两个字符串相等
 * https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/
 */


/**
 * 56ms  92.03%
 * 41MB  68.12%
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 == s2) return true

    const diffIdx = []

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            diffIdx.push(i)
        }

        if (diffIdx.length > 2) {
            return false
        }
    }

    return s1[diffIdx[0]] == s2[diffIdx[1]] && s1[diffIdx[1]] == s2[diffIdx[0]]

};