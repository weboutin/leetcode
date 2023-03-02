/**
 * 415. 字符串相加
 * https://leetcode.cn/problems/add-strings/
 */



/**
 * 68ms  64.54%
 * 43.2MB  80.93%
 */
var addStrings = function (num1, num2) {

    let idx1 = num1.length - 1
    let idx2 = num2.length - 1
    let sum = ''
    let loop = 0
    let plusOne = 0
    while (idx1 >= 0 || idx2 >= 0) {
        let tmp = Number(num1[idx1] || 0) + Number(num2[idx2] || 0) + plusOne
        if (tmp >= 10) {
            plusOne = 1
        } else {
            plusOne = 0
        }
        sum = (tmp % 10) + sum
        loop++
        idx1--
        idx2--
    }
    if (plusOne == 1) {
        sum = '1' + sum
    }

    return sum
};


num1 = "11", num2 = "123"
num1 = "456", num2 = "77"
num1 = "1", num2 = "9"

// num1 = "18582506933032752"
// num2 = "366213329703"
// num1 = "9133", num2 = "0"
// num1 = "408", num2 = "5"
num1 = "999", num2 = "999"

s = addStrings(num1, num2)
console.log(s)

console.log(8582873146362455 + Math.pow(10, 16))

console.log(Math.pow(10, 16))
console.log(8582873146362455)