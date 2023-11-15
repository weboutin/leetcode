/**
 * 2595. 奇偶位数
 * https://leetcode.cn/problems/number-of-even-and-odd-bits/
 */


/**
 * 80ms  32.73%
 * 41.82MB  49.09%
 */
var evenOddBit = function (n) {

    const result = n.toString(2)

    let evenCount = 0
    let oddCount = 0

    for (let i = 0; i < result.length; i++) {
        if (result[result.length - 1 - i] == '1') {
            if (i % 2 == 0) {
                evenCount++
            } else {
                oddCount++
            }
        }
    }
    return [evenCount, oddCount]
};


n = 17

evenOddBit(n)