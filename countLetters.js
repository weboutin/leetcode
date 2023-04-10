/**
 * 1180. 统计只含单一字母的子串
 * https://leetcode.cn/problems/count-substrings-with-only-one-distinct-letter/
 */



/**
 * 56ms  80.00%
 * 44.2MB  0.00%
 */
var countLetters = function (s) {
    let idx = 0

    let map = {}

    while (idx < s.length) {
        let key = s[idx]

        while (key[0] == s[idx + 1]) {
            key += key[0]
            idx++
        }

        idx++

        if (map[key] == undefined) {
            map[key] = 1
        } else {
            map[key]++
        }
    }

    let counter = 0;

    for (let key in map) {

        let tmpCounter = key.length * (key.length + 1) /2


        counter += tmpCounter * map[key]
    }
    return counter


};

s = "aaa"
// s = "aaaba"
s = "aaaaaaaaaa"

s = countLetters(s)
console.log(s)