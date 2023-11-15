/**
 * 2108. 找出数组中的第一个回文字符串
 * https://leetcode.cn/problems/find-first-palindromic-string-in-the-array/
 */



var isPalindrome = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false
        }
    }
    return true
};

/**
 * 68ms  89.87%
 * 44.53mb  69.62%
 */
var firstPalindrome = function (words) {

    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i]
        }

    }
    return ''

};