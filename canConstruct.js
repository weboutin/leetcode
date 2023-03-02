/**
 * 383. 赎金信
 * https://leetcode.cn/problems/ransom-note/
 */



/**
 * 92ms  34.11%
 * 43MB  82.76%
 */
var canConstruct = function (ransomNote, magazine) {
    let map = {}
    for (let i = 0; i < magazine.length; i++) {
        if (!map[magazine[i]]) {
            map[magazine[i]] = 1
        } else {
            map[magazine[i]]++
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) {
            return false
        }

        if (map[ransomNote[i]] <= 0) {
            return false
        }

        map[ransomNote[i]]--
    }

    return true
};