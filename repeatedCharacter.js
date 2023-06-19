/**
 * 2351. 第一个出现两次的字母
 * https://leetcode.cn/problems/first-letter-to-appear-twice/
 */


/**
 * 52ms  98.50%
 * 40.9MB  84.21%
 */
var repeatedCharacter = function (s) {

    let map = {}

    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] == undefined) {
            map[s[i]] = 1
        } else {
            return s[i]
        }

    }

};


s = "abccbaacz"

s = "abcdd"

ans = repeatedCharacter(s)
console.log(ans)