/**
 * https://leetcode.cn/problems/lexicographically-smallest-palindrome/
 */


/**
 * 132ms  84.05%
 * 50.7MB  28.41%
 */
var makeSmallestPalindrome = function (s) {
    let result = []

    for (let i = 0; i <= parseInt(s.length / 2); i++) {
        let left = s[i]
        let right = s[s.length - i - 1]

        if (left == right) {
            result[i] = left
            result[s.length - i - 1] = left
        }
        if (left < right) {
            result[i] = left
            result[s.length - i - 1] = left
        } else {
            result[i] = right
            result[s.length - i - 1] = right
        }

    }

    return result.join('')

};


s = "egcfe"
s = "abcd"

ans = makeSmallestPalindrome(s)
console.log(ans)