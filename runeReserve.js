/**
 * LCP 77. 符文储备
 * https://leetcode.cn/problems/W2ZX4X/ 
 */




/**
 * 112ms  56.86%
 * 44.15mb  37.25%
 */
var runeReserve = function (runes) {

    runes.sort((a, b) => a - b)

    let maxLen = 1

    let tmpLen = 1

    for (let i = 1; i < runes.length; i++) {

        if (runes[i] - runes[i - 1] <= 1) {
            tmpLen++
        } else {
            maxLen = Math.max(tmpLen, maxLen)
            tmpLen = 1
        }

    }

    return maxLen

};