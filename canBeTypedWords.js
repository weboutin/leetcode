/**
 * 1935. 可以输入的最大单词数
 * https://leetcode.cn/problems/maximum-number-of-words-you-can-type/
 */



/**
 * 60ms  86.21%
 * 41MB  96.55%
 */
var canBeTypedWords = function (text, brokenLetters) {
    let set = new Set(brokenLetters.split(''))

    text = text.split(' ')

    let counter = 0
    for (let i = 0; i < text.length; i++) {
        let hasBroken = false
        for (let j = 0; j < text[i].length; j++) {
            if (set.has(text[i][j])) {
                hasBroken = true
                break
            }
        }
        if (!hasBroken) {
            counter++
        }
    }

    return counter

};