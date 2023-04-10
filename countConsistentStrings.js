/**
 * 1684. 统计一致字符串的数目
 * https://leetcode.cn/problems/count-the-number-of-consistent-strings/
 */


/**
 * 92ms  85.33%
 * 49.9MB  73.33%
 */
var countConsistentStrings = function (allowed, words) {
    let s = new Set();
    for (let i = 0; i < allowed.length; i++) {
        s.add(allowed[i])
    }

    let counter = 0

    for (let i = 0; i < words.length; i++) {
        let isMatch = true
        for (let j = 0; j < words[i].length; j++) {
            if (!s.has(words[i][j])) {
                isMatch = false
                break
            }
        }
        if (isMatch) {
            counter++
        }
    }

    return counter

};