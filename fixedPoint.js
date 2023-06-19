/**
 * 1064. 不动点
 * https://leetcode.cn/problems/fixed-point/?envType=list&envId=bxbmnec
 */



/**
 * 52ms  100.00%
 * 41.4MB  16.67%
 */
var fixedPoint = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == i) {
            return i
        }
    }

    return -1

};