/**
 * 2635. 转换数组中的每个元素
 * https://leetcode.cn/problems/apply-transform-over-each-element-in-array/
 */


/**
 * 52ms  95.05%
 * 41MB  76.77%
 */
var map = function (arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }

    return arr
};