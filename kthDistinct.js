/**
 * 2053. 数组中第 K 个独一无二的字符串
 * https://leetcode.cn/problems/kth-distinct-string-in-an-array/
 */


/**
 * 72ms  56.86%
 * 43.2MB  84.31%
 */
var kthDistinct = function (arr, k) {

    let existSet = new Set()

    let uniqSet = new Set()

    for (let i = 0; i < arr.length; i++) {
        if (existSet.has(arr[i])) {
            uniqSet.add(arr[i])
        }
        existSet.add(arr[i])
    }

    let _k = 0

    for (let i = 0; i < arr.length; i++) {
        if (!uniqSet.has(arr[i])) {
            _k++
        }

        if (_k == k) {
            return arr[i]
        }

    }

    return ''
};