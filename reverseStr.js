/**
 * 541. 反转字符串 II
 * https://leetcode.cn/problems/reverse-string-ii/
 */


/**
 * 68ms  50.36%
 * 43.3MB  83.04%
 */
var reverseStr = function (s, k) {

    const arr = Array.from(s)

    for (let i = 0; i < arr.length; i = i + 2 * k) {
        reverse(arr, i, Math.min(i + k, arr.length) - 1)
    }
    return arr.join('')
};


function reverse(arr, left, right) {
    while (left < right) {
        let tmp = arr[left]
        arr[left] = arr[right]
        arr[right] = tmp
        left++
        right--
    }
}

s = "abcdefg", k = 2

reverseStr(s, k)