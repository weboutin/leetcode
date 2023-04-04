/**
 * 709. 转换成小写字母
 * https://leetcode.cn/problems/to-lower-case/
 */


/**
 * 56ms  85.15%
 * 41MB  79.21%
 */
var toLowerCase = function (s) {
    let ans = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        let code = c.charCodeAt()
        if (code >= 65 && code <= 90) {
            c = String.fromCharCode(code + 32)
        }
        ans.push(c)
    }

    return ans.join('')

};

s = "Hello"
ans = toLowerCase(s)
console.log(ans)