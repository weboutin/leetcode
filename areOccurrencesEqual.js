/**
 * 1941. 检查是否所有字符出现次数相同
 * https://leetcode.cn/problems/check-if-all-characters-have-equal-number-of-occurrences/?envType=list&envId=bxbmnec
 */

/**
 * 60ms  88.24%
 * 42.4MB  52.94%
 */
var areOccurrencesEqual = function (s) {

    let map = {}

    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] == undefined) {
            map[s[i]] = 1
        } else {
            map[s[i]] ++
        }

    }
    let k = null

    for (let key in map) {
        if (k == null) {
            k = map[key]
        }

        if (map[key] != k) {
            return false
        }
    }

    return true

};


s = "aaabb"


ans = areOccurrencesEqual(s)

console.log(ans)

