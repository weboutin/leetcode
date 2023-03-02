
/**
 * 位1的个数
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn1m0i/
 * >>>  位右移
 * & 按位与
 */

/**
 * 48 ms 99.48%
 * 41.3 MB 74.64%
 */
var hammingWeight = function (n) {
    let count = 0;

    while (n != 0) {
        count += n & 1
        n = n >>> 1
    }
    return count
};


n = 00000000000000000000000000001011

const result = hammingWeight(n)

console.log(result)