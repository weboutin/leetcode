/**
 * 2423. 删除字符使频率相同
 * https://leetcode.cn/problems/remove-letter-to-equalize-frequency/description/
 */


/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    let map = {}

    for (let i = 0; i < word.length; i++) {

        if (map[word[i]] == undefined) {
            map[word[i]] = 1
        } else {
            map[word[i]]++
        }

    }

    let set = new Set()

    for (let key in map) {
        set.add(map[key])
    }

    let arr = []

    set.forEach(e => arr.push(e))

    if (set.size == 1 && arr[0] == 1) {
        return true
    }

    if (set.size > 2) {
        return false
    }

    if (Math.abs(arr[0] - arr[1]) != 1) {
        return false
    }

    for (let key in map) {
        set.add(map[key])
    }


    return true

};