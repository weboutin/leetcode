/**
 * 2490. 回环句
 * https://leetcode.cn/problems/circular-sentence/
 */

/**
 * 60ms  87.72%
 * 41.4MB  35.09%
 */
var isCircularSentence = function (sentence) {
    let arr = sentence.split(' ')

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][arr[i].length - 1] != arr[i + 1][0]) {
            return false
        }
    }

    return sentence[0] == sentence[sentence.length - 1]
};