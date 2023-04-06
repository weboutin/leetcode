/**
 * 1118. 一月有多少天
 * https://leetcode.cn/problems/number-of-days-in-a-month/
 */



/**
 * 64ms  20.00%
 * 41MB  33.33%
 */
var numberOfDays = function (year, month) {
    const arr = [-1, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 2) {
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28
    } else {
        return arr[month]
    }
};



ans = numberOfDays(2000, 2) // 闰年
// ans = numberOfDays(2004, 2) // 闰年
// ans = numberOfDays(1900, 2) // 平年
console.log(ans)