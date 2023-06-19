/**
 * 1903. 字符串中的最大奇数
 * https://leetcode.cn/problems/largest-odd-number-in-string/
 */



/**
 * 80ms  30.85%
 * 44.5MB  29.79%
 */
var largestOddNumber = function (num) {

    let odds = new Set(['1', '3', '5', '7', '9'])

    for (let i = num.length - 1; i >= 0; i--) {
        if (odds.has(num[i])) {
            return num.slice(0, i + 1)
        }

    }

    return ''

};

num = "35427"
// num = "52"

ans = largestOddNumber(num)
console.log(ans)