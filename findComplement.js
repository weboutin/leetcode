/**
 * 476. 数字的补数 
 * https://leetcode.cn/problems/number-complement/
 */


/**
 * 60ms  65.85%
 * 41.2MB  10.57%
 */
var findComplement = function (num) {
    let s = num.toString(2).split('').map((e => {
        if (e == '1') {
            return '0'
        } else {
            return '1'
        }
    })).join('')

    return parseInt(s, 2)
};


num = 5

s = findComplement(5)
console.log(s)