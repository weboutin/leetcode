/**
 * 2729. 判断一个数是否迷人
 * https://leetcode.cn/problems/check-if-the-number-is-fascinating/description/
 */



/**
 * 92ms  6.94%
 * 41.86mb  26.39%
 */
var isFascinating = function (n) {

    const str = ((n.toString()) + (2 * n).toString() + (3 * n).toString()).split('').sort((a, b) => a - b)

    for (let i = 1; i <= str.length; i++) {

        if (i != Number(str[i - 1])) {
            return false
        }
    }

    return true

};

n = 192

isFascinating(n)