/**
 * 1796. 字符串中第二大的数字
 * https://leetcode.cn/problems/second-largest-digit-in-a-string/
 */


/**
 * 72ms  52.38%
 * 42.6MB  77.78%
 */
var secondHighest = function (s) {

    s = s.replace(/[a-z]/g, '')

    if (s.length <= 1) {
        return -1
    }

    let max = s[0]
    let second = null
    for (let i = 1; i < s.length; i++) {
        if (s[i] == max) {
            continue
        }

        if (s[i] > max) {
            second = max
            max = s[i]
        } else if (s[i] > second || second == null) {
            second = s[i]
        }
    }
    return second || -1

}


s = "dfa12321afd"
s = "abc1111"

ans = secondHighest(s)
console.log(ans)