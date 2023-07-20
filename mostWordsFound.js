/**
 * 2114. 句子中的最多单词数
 * https://leetcode.cn/problems/maximum-number-of-words-found-in-sentences/
 */



/**
 * 52ms  99.24%
 * 43.1MB  61.07%
 */
var mostWordsFound = function (sentences) {

    let max = -1

    for (let i = 0; i < sentences.length; i++) {

        max = Math.max(max, sentences[i].split(' ').length)

    }

    return max

};