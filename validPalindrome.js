/***
 * 680. 验证回文串 II
 * https://leetcode.cn/problems/valid-palindrome-ii/
 */
/**
 * 88ms  22.71%
 * 51.7MB  11.21%
 */
var validPalindrome = function (s) {
    const { ok, i, j } = helper(s)
    if (ok) return true
    return helper(s.slice(i + 1, j + 1)).ok || helper(s.slice(i, j)).ok
};



function helper(s) {
    console.log(s)
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return {
                ok: false,
                i: i,
                j: s.length - i - 1
            }
        }
    }
    return {
        ok: true
    }
}

s = "aba"
s = "abca"
s = "abc"

ans = validPalindrome(s)
console.log(ans)