/**
 * 246. 中心对称数
 * https://leetcode.cn/problems/strobogrammatic-number/
 */


/**
 * 60ms  60.00%
 * 40.8MB  88.00%
 */
let rMap = {
    '1': '1',
    '8': '8',
    '0': '0',
    '6': '9',
    '9': '6',
}

function isStrobogrammatic(num) {
    for (let i = 0; i < num.length; i++) {
        if (!rMap[num[i]]) {
            return false
        }
        if (num[i] != rMap[num[num.length - 1 - i]]) {
            return false
        }
    }

    return true
}


// num = '69'
// num = '10'
s = isStrobogrammatic('10')
console.log(s)
