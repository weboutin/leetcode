/**
 * 1837. K 进制表示下的各位数字总和
 * https://leetcode.cn/problems/sum-of-digits-in-base-k/
 */



/**
 * 48ms  100.00%
 * 40.01mb  16.33%
 */
var sumBase = function (n, k) {

    let sum = 0

    while (n > 0) {

        sum += n % k

        n = parseInt(n / k)

    }


    return sum
};