/**
 * 1624. 两个相同字符之间的最长子字符串
 * https://leetcode.cn/problems/largest-substring-between-two-equal-characters/?envType=list&envId=bxbmnec
 */



/**
 * 68ms  51.09%
 * 41.3MB  59.78%
 */
var maxLengthBetweenEqualCharacters = function (s) {

    let max = -1

    for (let i = 0; i < s.length - 1; i++) {

        let leftIdx = s.indexOf(s[i])
        let rightIdx = s.lastIndexOf(s[i])

        if (leftIdx != rightIdx && leftIdx != -1) {
            max = Math.max(rightIdx - leftIdx - 1, max)

        }

    }

    return max

};


s = "aa"
s = "abca"
s = "cbzxy"
s = "cabbac"

ans = maxLengthBetweenEqualCharacters(s)

console.log(ans)