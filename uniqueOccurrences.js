/**
 * 1207. 独一无二的出现次数
 * https://leetcode.cn/problems/unique-number-of-occurrences/
 */




/**
 * 68ms  36.99%
 * 41.7MB  62.14%
 */
var uniqueOccurrences = function (arr) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == undefined) {
            map[arr[i]] = 1
        } else {
            map[arr[i]]++
        }
    }

    let s = new Set()

    for (let key in map) {

        if (s.has(map[key])) {
            return false
        } else {
            s.add(map[key])
        }
    }

    return true
};