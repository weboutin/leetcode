/**
 * 459. 重复的子字符串
 * https://leetcode.cn/problems/repeated-substring-pattern/
 */



/**
 * 192ms  8.24%
 * 47.5MB  22.36%
 */
var repeatedSubstringPattern = function (s) {
    if (s.length == 1) return false

    let tmpStr = ''
    for (let i = 0; i < s.length / 2; i++) {
        tmpStr += s[i]
        let tryRepeat = tmpStr
        while (tryRepeat.length < s.length) {
            tryRepeat = tryRepeat + tmpStr
        }
        if (tryRepeat == s) {
            return true
        }
    }

    return false
};


s = "aba"
s = "abcabcabcabc"

s = 'ababab'


result = repeatedSubstringPattern(s)
console.log(result)