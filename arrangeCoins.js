/**
 * 441. 排列硬币
 * https://leetcode.cn/problems/arranging-coins/
 */


/**
 * 104ms  11.34%
 * 42.8MB  88.96%
 */
var arrangeCoins = function (n) {

    let k = 1;
    while (n > 0) {
        n = n - k
        k++
    }
    return n == 0 ? k - 1 : k - 2
};