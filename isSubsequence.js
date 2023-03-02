/**
 * 392. 判断子序列
 * https://leetcode.cn/problems/is-subsequence/
 */


/**
 * 89ms  90.24%
 * 40.9MB  69.99%
 */
var isSubsequence = function (s, t) {
    if (s.length == 0 && t.length == 0) return true
    let sIdx = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[sIdx]) {
            sIdx++
        }

        if (sIdx == s.length) {
            return true
        }

    }

    return false
};

s = 'abc'
t = 'ahbgdc'


isSubsequence(s, t)