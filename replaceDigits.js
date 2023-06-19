/**
 * 1844. 将所有数字用字符替换
 * https://leetcode.cn/problems/replace-all-digits-with-characters/
 */


/**
 * 64ms  46.25%
 * 41.2MB  41.25%
 */
var replaceDigits = function (s) {
    let result = ''

    for (let i = 0; i < s.length; i = i + 2) {
        result += shift(s[i], Number(s[i + 1]))
    }
    return result

}

function shift(s, n) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (isNaN(n)) {
        return s
    }
    return `${s}${letters[s.charCodeAt() - 97 + n]}`
}


s = "a1b2c3d4e"

ans = replaceDigits(s)
console.log(ans)