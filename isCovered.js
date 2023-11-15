/**
 * 1893. 检查是否区域内所有整数都被覆盖
 * https://leetcode.cn/problems/check-if-all-the-integers-in-a-range-are-covered/
 */


/**
 * 60ms  76.92%
 * 40.19mb 76.92%
 */
var isCovered = function (ranges, left, right) {


    for (let i = left; i <= right; i++) {
        let isMatch = false

        for (let j = 0; j < ranges.length; j++) {

            if ( i >= ranges[j][0] && i <= ranges[j][1]) {
                isMatch = true
                break
            }

        }
        if (!isMatch) {
            return false
        }

    }

    return true

};