/**
 * 1332. 删除回文子序列
 * https://leetcode.cn/problems/remove-palindromic-subsequences/
 */


/**
 * 64ms  22.94%
 * 41.1MB  25.88%
 */
var removePalindromeSub = function (s) {

    return isPalindrome(s) ? 1 : 2
};


var isPalindrome = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false
        }
    }
    return true
};



s = "ababa"
s = "abb"
s = "baabb"
s = "bbaabaaa"

ans = removePalindromeSub(s)
console.log(ans)