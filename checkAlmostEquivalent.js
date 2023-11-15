/**
 * 2068. 检查两个字符串是否几乎相等
 * https://leetcode.cn/problems/check-whether-two-strings-are-almost-equivalent/
 */




/**
 * 60ms  82.00%
 * 40.85mb  94.00%
 */
var checkAlmostEquivalent = function (word1, word2) {

    let arr1 = new Array(26).fill(0)

    let arr2 = new Array(26).fill(0)

    for (let i = 0; i < word1.length; i++) {
        arr1[word1[i].charCodeAt() - 97]++
        arr2[word2[i].charCodeAt() - 97]++
    }

    for (let i = 0; i < 26; i++) {

        if (Math.abs(arr1[i] - arr2[i]) > 3) {
            return false
        }

    }

    return true

};