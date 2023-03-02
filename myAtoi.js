
/**
 * 针对多个读入场景进行判断，然后得出结果
 * 72 ,s
 * 44.1 MB
 */
var myAtoi = function (s) {
    const reg = /[^(0-9|\+|\-)]/
    const isNumReg = /[0-9]/
    let isNum = false
    const result = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ' && !isNum) {
            continue
        }
        if (/\+|\-/.test(s[i]) && isNumReg.test(s[i + 1]) && !isNum) {
            result.push(s[i])
            continue
        }
        if (isNumReg.test(s[i])) {
            isNum = true
        }
        if (isNum && isNumReg.test(s[i])) {
            result.push(s[i])
        } else {
            break
        }
    }
    if (Math.pow(-2, 31) > result.join('')) {
        return Math.pow(-2, 31)
    }
    if (result.join('') > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    }
    const clearZeroResult = []
    let isFirstZero = true
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 0 && isFirstZero) {
        } else {
            isFirstZero = false
            clearZeroResult.push(result[i])
        }
    }
    // return result.join('')
    return clearZeroResult.join('')
};


s = `010`

console.log(myAtoi(s))