/**
 * 1876. 长度为三且各字符不同的子字符串
 * https://leetcode.cn/problems/substrings-of-size-three-with-distinct-characters/
 */



/**
 * 56ms  93.48%
 * 41.8MB  70.65%
 */
var countGoodSubstrings = function (s) {
    let counter = 0
    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] != s[i + 1] && s[i] != s[i + 2] && s[i + 1] != s[i + 2]) {
            counter++
        }
    }

    return counter

};

s = "aababcabc"
ans = countGoodSubstrings(s)
console.log(ans)