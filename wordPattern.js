/**
 * 290. 单词规律
 * https://leetcode.cn/problems/word-pattern/
 */

/**
 * 64ms  38.70%
 * 41.2MB  8.19%
 */
var wordPattern = function (pattern, s) {

    const map = {}
    const wordMap = new Map()

    let sArr = s.split(' ')
    if (pattern.length != sArr.length) return false

    for (let i = 0; i < pattern.length; i++) {
        if (!map[pattern[i]] && !wordMap.has(sArr[i])) {
            map[pattern[i]] = sArr[i]
            wordMap.set(sArr[i], pattern[i])
        }

        if (map[pattern[i]] != sArr[i]) {
            return false
        }

    }
    return true

};

pattern = 'abba'


// s = "dog cat cat dog"
s = "dog constructor constructor dog"
// s = "dog dog dog dog"


let result = wordPattern(pattern, s)
console.log(result)
