/**
 * 1486. 数组异或操作
 * https://leetcode.cn/problems/xor-operation-in-an-array/
 */




/**
 * 56ms  86.73%
 * 40.7MNB  95.92%
 */
var xorOperation = function (n, start) {

    let result = start

    for (let i = 1; i < n; i++) {
        result ^= start + 2 * i
    }

    return result

};