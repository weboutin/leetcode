/**
 * LCR 069. 山脉数组的峰顶索引
 * https://leetcode.cn/problems/B1IidL/
 */


/**
 * 56ms  93.20%
 * 40.66mb  16.51%
 */
var peakIndexInMountainArray = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return i
        }
    }

};