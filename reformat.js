/**
 * 1417. 重新格式化字符串
 * https://leetcode.cn/problems/reformat-the-string/?envType=list&envId=bxbmnec
 */

/**
 * 76ms  48.39%
 * 46.8MB  22.58%
 */
var reformat = function (s) {
    let c = []
    let n = []
    let result = ''
    let result2 = ''

    for (let i = 0; i < s.length; i++) {
        if (/[0-9]/.test(s[i])) {
            n.push(s[i])
        } else {
            c.push(s[i])
        }
    }

    if (Math.abs(c.length - n.length) > 1) {
        return ''
    }

    if (c.length > n.length) {
        for (let i = 0; i < c.length; i++) {
            result += `${c[i]}${n[i] || ''}`
        }
    } else {
        for (let i = 0; i < n.length; i++) {
            result2 += `${n[i]}${c[i] || ''}`
        }
    }

    return result.length > result2.length ? result : result2
};



s = "covid2019"
s = "ab123"

ans = reformat(s)
console.log(ans)