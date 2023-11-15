/**
 * 1078. Bigram 分词
 * https://leetcode.cn/problems/occurrences-after-bigram/description/
 */



/**
 * 60ms  64.94%
 * 40.18mb  11.69%
 */
var findOcurrences = function (text, first, second) {

    const arr = text.split(' ')

    const result = []

    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] == first && arr[i - 1] == second) {
            result.push(arr[i])
        }
    }

    return result

};