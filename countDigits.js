/**
 * 2520. 统计能整除数字的位数
 * https://leetcode.cn/problems/count-the-digits-that-divide-a-number/
 */



/**
 * 60ms  66.10%
 * 40.8MB  81.36%
 */
var countDigits = function (num) {

    let count = 0
    const str = num.toString()
    for (let i = 0; i <= str.length; i++) {

        if (num % Number(str[i]) == 0) {
            count++
        }

    }

    return count

};