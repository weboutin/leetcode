/**
 * 401. 二进制手表
 * https://leetcode.cn/problems/binary-watch/
 */


/**
 * 56ms  92.04%
 * 43.2MB  25.66%
 */
var readBinaryWatch = function (turnedOn) {

    let result = []
    for (let h = 0; h < 12; h++) {

        for (let m = 0; m < 60; m++) {

            if (h.toString(2).split('0').join('').length + m.toString(2).split('0').join('').length == turnedOn) {
                result.push(h + ':' + (m < 10 ? '0' : '') + m)
            }

        }
    }

    return result
};
