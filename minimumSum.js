/**
 * 2160. 拆分数位后四位数字的最小和
 * https://leetcode.cn/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 */



/**
 * 68ms  30.65%
 * 41.2MB  29.03%
 */
var minimumSum = function (num) {
    let numArr = []

    while (num > 0) {
        numArr.push(num % 10)
        num = parseInt(num / 10)
    }

    numArr.sort((a, b) => a - b)


    let num1 = numArr[0] * 10 + numArr[2]
    let num2 = numArr[1] * 10 + numArr[3]


    return num1 + num2

};