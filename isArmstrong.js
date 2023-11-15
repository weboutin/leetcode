/**
 * 1134. 阿姆斯特朗数
 * https://leetcode.cn/problems/armstrong-number/
 */



/**
 * 52ms  100.00%
 * 40.04mb  66.67%
 */
var isArmstrong = function (n) {


    let sum = 0

    const len = n.toString().length

    let tmp = n

    while (tmp > 0) {

        sum += Math.pow((tmp % 10), len)

        tmp = parseInt(tmp / 10)
    }


    return sum == n

};