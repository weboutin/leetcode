/**
 * 844. 比较含退格的字符串
 * https://leetcode.cn/problems/backspace-string-compare/
 */


/**
 * 60ms 82.00%
 * 41.7MB  42.67%
 */
var backspaceCompare = function (s, t) {

    return helper(s) == helper(t)

};


function helper(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '#') {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }

    return arr.join('')
}



s = "ab#c", t = "ad#c"

ans = backspaceCompare(s, t)
console.log(ans)