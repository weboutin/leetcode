/**
 * 405. 数字转换为十六进制数
 * https://leetcode.cn/problems/convert-a-number-to-hexadecimal/
 */



/**
 * 56ms  87.16
 * 40.9MB  88.99%
 */
var toHex = function (num) {
    let result = ''

    const hexDict = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f' }

    if (num == 0) return '0'

    if (num < 0) {
        num = 16 ** 8 + num
    }

    while (num > 0) {
        result = hexDict[num % 16] + result
        num = parseInt(num / 16)
    }

    return result


};


ans = toHex(-1)
console.log(ans)

// console.log(26 % 16)