/**
 * 434. 字符串中的单词数
 * https://leetcode.cn/problems/number-of-segments-in-a-string/
 */

/**
 * 64ms  30.35%
 * 40.8MB  77.04%
 */
var countSegments = function (s) {
    let count = 0
    let isWord = false
    s = s + ' '
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            isWord = true
        } else {
            if (isWord) {
                count++
            }
            isWord = false
        }
    }
    return count
};

s = "Hello, my name is John"

let result = countSegments(s)

console.log(result)
