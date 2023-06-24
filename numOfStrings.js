/**
 * 1967. 作为子字符串出现在单词中的字符串数目
 * https://leetcode.cn/problems/number-of-strings-that-appear-as-substrings-in-word/?envType=list&envId=bxbmnec
 */


/**
 * 56ms  86.79%
 * 51.1MB  84.91%
 */
var numOfStrings = function (patterns, word) {

    let count = 0;

    for (let i = 0; i < patterns.length; i++) {
        if (word.indexOf(patterns[i]) > -1) {
            count++
        }
    }

    return count
};