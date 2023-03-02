

/**
 * 转字符串后反转
 */

/**
 * 68ms
 * 42.3mb
 */
var reverse = function (x) {
    let result = 0
    let flag = x > 0
    x = Math.abs(x)
    while (x >= 10) {
        const key = x % 10
        result = result * 10 + key
        x = parseInt(x / 10)
    }
    result = result * 10 + x
    if (Math.pow(-2, 31) > result || result > Math.pow(2, 31) - 1) {
        return 0
    }
    return flag ? result : result * -1
};

/**
 * 64ms
 * 42.4MB
 */
var reverse = function (x) {
    let result = 0
    while (Math.abs(x) >= 10) {
        const key = x % 10
        result = result * 10 + key
        x = parseInt(x / 10)
    }
    result = result * 10 + x
    if (Math.pow(-2, 31) > result || result > Math.pow(2, 31) - 1) {
        return 0
    }
    return result
};


console.log(reverse(-123))
// console.log(reverse(0))
// console.log(reverse(1534236469))
// console.log(12.3 % 10)
