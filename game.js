/**
 * LCP 01. 猜数字
 * https://leetcode.cn/problems/guess-numbers/
 */


/**
 * 56ms  78.29%
 * 40.8MB  54.26%
 */
var game = function (guess, answer) {
    let rightCount = 0

    for (let i = 0; i < guess.length; i++) {

        if (guess[i] == answer[i]) rightCount++
    }


    return rightCount
};