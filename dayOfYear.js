/**
 * 1154. 一年中的第几天
 * https://leetcode.cn/problems/day-of-the-year/
 */


var numberOfDays = function (year, month) {
    const arr = [-1, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 2) {
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28
    } else {
        return arr[month]
    }
};



/**
 * 144ms  89.47%
 * 49.1MB  95.61%
 */
var dayOfYear = function (date) {

    const arr = date.split('-')

    const year = Number(arr[0])
    const month = Number(arr[1])
    const day = Number(arr[2])

    let count = 0

    for (let i = 1; i < month; i++) {
        count += numberOfDays(year, i)
    }

    return count + day

};


date = "2019-01-09"
date = "2019-02-10"
ans = dayOfYear(date)
console.log(ans)