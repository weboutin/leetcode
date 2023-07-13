/**
 * 2710. 移除字符串中的尾随零
 * https://leetcode.cn/problems/remove-trailing-zeros-from-a-string/
 */



/**
 * 68ms  81.20%
 * 43.2MB  82.48%
 */
var removeTrailingZeros = function(num) {
    return num.replace(/[0]*$/,'')
};