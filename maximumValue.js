/**
 * 2496. 数组中字符串的最大值
 * https://leetcode.cn/problems/maximum-value-of-a-string-in-an-array/
 */



/**
 * 56ms  82.65%
 * 40.9MB  89.80%
 */
var maximumValue = function (strs) {

    let max = 0;


    for (let i = 0; i < strs.length; i++) {

        if (/.*[a-z].*/.test(strs[i])) {
            max = Math.max(max, strs[i].length)
        } else {
            max = Math.max(max, parseInt(strs[i]))
        }
    }

    return max

};