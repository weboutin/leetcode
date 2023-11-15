/**
 * 1309. 解码字母到整数映射
 * https://leetcode.cn/problems/decrypt-string-from-alphabet-to-integer-mapping/
 */



/**
 * 60ms  74.19%
 * 40.06mb  72.58%
 */
var freqAlphabets = function (s) {

    let idx = 0

    let result = ''

    while (idx < s.length) {
        let code = null

        if (s[idx + 2] == '#') {
            code = Number(`${s[idx]}${s[idx + 1]}`)
            idx = idx + 3
        } else {
            code = Number(`${s[idx]}`)
            idx++
        }

        result += String.fromCharCode(code+96);

    }

    return result

};