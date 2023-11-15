/**
 * LCP 11. 期望个数统计
 * https://leetcode.cn/problems/qi-wang-ge-shu-tong-ji/description/
 */



/**
 * 84ms  58.33%
 * 51mb  100.00%
 */
var expectNumber = function (scores) {

    return new Set(scores).size

};