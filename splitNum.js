/**
 * 2578. 最小和分割
 * https://leetcode.cn/problems/split-with-minimum-sum/
 */




/**
 * 56ms  92.98%
 * 41.2MB  77.19%
 */
var splitNum = function (num) {

    let numArr = []

    while (num > 0) {
        numArr.push(num % 10)
        num = parseInt(num / 10)
    }

    numArr.sort((a, b) => a - b)

    let num1Str = ''
    let num2Str = ''

    for (let i = 0; i < numArr.length; i = i + 2) {
        num1Str += `${numArr[i]}`
    }

    for (let i = 1; i < numArr.length; i = i + 2) {
        num2Str += `${numArr[i]}`
    }


    return Number(num1Str) + Number(num2Str)

};