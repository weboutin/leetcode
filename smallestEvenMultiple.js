/**
 * 2413. 最小偶倍数
 * https://leetcode.cn/problems/smallest-even-multiple/?envType=list&envId=bxbmnec
 */



/**
 * 52ms  94.59%
 * 41.1MB  28.26%
 */
var smallestEvenMultiple = function (n) {
    return n % 2 == 0 ? n : n * 2
};