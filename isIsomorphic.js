/**
 * 205. 同构字符串
 * https://leetcode.cn/problems/isomorphic-strings/
 */


/**
 * 68ms  78.73%
 * 41.3MB  81.09%
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false

    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (map[s[i]] != t[i]) return false
        } else {
            // 判断是否被多个对应
            for (let key in map) {
                if (map[key] == t[i]) {
                    return false
                }
            }
            map[s[i]] = t[i]
        }

    }

    return true
};



s = "egg", t = "add"
s = "foo", t = "bar"
s = "paper", t = "title"

s = "badc"
t = "baba"

const result = isIsomorphic(s, t)
console.log(result)