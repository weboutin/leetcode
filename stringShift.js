/**
 * 1427. 字符串的左右移
 * https://leetcode.cn/problems/perform-string-shifts/
 */



/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {

    let amount = 0

    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0] == 0) {
            amount -= shift[i][1]
        } else {
            amount += shift[i][1]
        }
    }

    amount = amount % shift.length

    if (amount > 0) {
        return s.slice(amount + 1, s.length).concat(s.slice(0, amount))
    } else {
        return s.slice(0, -amount).concat(s.slice(-amount + 1, s.length))
    }

};