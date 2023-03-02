/**
 * 258. 各位相加
 * https://leetcode.cn/problems/add-digits/
 */

/**
 * 60ms  94.79%
 * 43MB  15.84%
 */
var addDigits = function (num) {
    let sum = num
    while (sum >= 10) {
        sum = 0
        while (num >= 1) {
            sum += (num % 10)
            num = parseInt(num / 10)
        }
        num = sum
    }
    return sum
};

let result = addDigits(10)
console.log(result)