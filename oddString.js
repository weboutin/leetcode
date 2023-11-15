/**
 * 2451. 差值数组不同的字符串
 * https://leetcode.cn/problems/odd-string-difference/
 */



/**
 * 56ms  96.08%
 * 42.05mb  9.80%
 */
var oddString = function (words) {
    let set = new Set()
    let oddStr = ''

    for (let i = 0; i < words.length; i++) {

        let result = []

        for (let j = 1; j < words[i].length; j++) {
            result.push(words[i][j].charCodeAt() - words[i][j - 1].charCodeAt())
        }

        result = result.join('-')

        if (set.has(result)) {
            oddStr = result
            break
        } else {
            set.add(result)
        }
    }

    for (let i = 0; i < words.length; i++) {
        let result = []

        for (let j = 1; j < words[i].length; j++) {
            result.push(words[i][j].charCodeAt() - words[i][j - 1].charCodeAt())
        }

        result = result.join('-')

        if (result != oddStr) {

            return words[i]

        }

    }
};