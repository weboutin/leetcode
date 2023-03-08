/**
 * 125. 验证回文串
 * https://leetcode.cn/problems/valid-palindrome/
 */

/**
 * 双指针比较
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/([^a-z|0-9])/g, '').split('')
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false
        }
    }
    return true
};


s = "A man, a plan, a canal: Panama"

// s = "0P"


console.log(isPalindrome(s))