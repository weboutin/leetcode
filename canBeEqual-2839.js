/**
 * 2839. 判断通过操作能否让字符串相等 I
 * https://leetcode.cn/problems/check-if-strings-can-be-made-equal-with-operations-i/
 */



/**
 * 80ms  31.78%
 * 44.33mb  5.61%
 */
var canBeEqual = function (s1, s2) {

    let s1Str1 = []
    let s1Str2 = []

    for (let i = 0; i < s1.length; i++) {

        if (i % 2 == 0) {
            s1Str2.push(s1[i])
        } else {
            s1Str1.push(s1[i])

        }
    }

    let s2Str1 = []

    let s2Str2 = []

    s1.charCodeAt

    for (let i = 0; i < s2.length; i++) {

        if (i % 2 == 0) {
            s2Str2.push(s2[i])
        } else {
            s2Str1.push(s2[i])

        }
    }

    return s1Str1.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') == s2Str1.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') &&
        s1Str2.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') == s2Str2.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')

};