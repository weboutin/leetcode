/**
 * LCP 06. 拿硬币
 * https://leetcode.cn/problems/na-ying-bi/submissions/
 */



/**
 * 60ms  66.67%
 * 40.9MB  77.24%
 */
var minCount = function (cont) {

    let pickCount = 0

    for (let i = 0; i < cont.length; i++) {

        if (cont[i] % 2 == 0) {
            pickCount += cont[i] / 2
        } else {
            pickCount += Math.floor(cont[i] / 2) + 1
        }

    }

    return pickCount

};