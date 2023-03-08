/**
 * 557. 反转字符串中的单词 III
 * https://leetcode.cn/problems/reverse-words-in-a-string-iii/
 */


/**
 * 60ms  97.74%
 * 47.3MB  46.87%
 */
var reverseWords = function (s) {
    s = s.split(' ')
    let result = ''
    for (let i = 0; i < s.length; i++) {
        result += reverse(s[i]) + ' '
    }

    return result.slice(0, result.length - 1)
};

function reverse(s) {
    s = s.split('')

    for (let i = 0; i < s.length / 2; i++) {
        let tmp = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = tmp
    }
    return s.join('')
}