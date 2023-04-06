/**
 * 942. 增减字符串匹配
 * https://leetcode.cn/problems/di-string-match/
 */


/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {



    left = 0
    rigth = s.length
    let first
    if (s[0] == 'I') {
        first = left
        left++
    } else {
        first = rigth
        rigth--
    }
    const result = [first]

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'I') {
            result.push(left)
            left++
        } else if (s[i] == 'D') {
            result.push(rigth)
            rigth--
        }
    }
    return result

};


s = "IDID"
// s = "III"
ans = diStringMatch(s)
console.log(ans)