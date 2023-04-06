
/**
 * 1160. 拼写单词
 * https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters/
 */





/**
 * 这个就是题解的思路，但是执行的超级慢
 * 640ms  7.86%
 * 66.2MB  5.0%
 */
var countCharacters = function (words, chars) {
    let map = {}
    let result = 0
    for (let i = 0; i < chars.length; i++) {

        if (map[chars[i]] == undefined) {
            map[chars[i]] = 1
        } else {
            map[chars[i]]++
        }

    }
    for (let i = 0; i < words.length; i++) {

        let tmpMap = {}

        for (let j = 0; j < words[i].length; j++) {
            if (tmpMap[words[i][j]] == undefined) {
                tmpMap[words[i][j]] = 1
            } else {
                tmpMap[words[i][j]]++
            }
        }

        let isMatch = true
        for (let key in tmpMap) {
            if (map[key] == undefined || map[key] < tmpMap[key]) {
                isMatch = false;
                break
            }
        }

        if (isMatch) {
            result += words[i].length
        }

    }
    return result


};