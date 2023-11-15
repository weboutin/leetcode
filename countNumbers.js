/**
 * LCR 135. 报数
 * https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 */

/**
 * 80ms  92.68%
 * 49.83mb  75.30%
 */
var countNumbers = function (cnt) {
    const max = parseInt(new Array(cnt).fill('9').join(''))

    const result = []

    for (let i = 1; i <= max; i++) {
        result.push(i)
    }

    return result

};