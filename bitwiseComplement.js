/**
 * 1009. 十进制整数的反码
 * https://leetcode.cn/problems/complement-of-base-10-integer/
 */



/**
 * 60ms  70.59%
 * 40.05mb  70.59%
 */
var bitwiseComplement = function (n) {
    return parseInt(n.toString(2).split('').map(e => e == '1' ? '0' : '1').join(''), 2)
};

ans = bitwiseComplement(5)