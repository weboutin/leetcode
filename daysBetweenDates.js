/**
 * 1360. 日期之间隔几天
 * https://leetcode.cn/problems/number-of-days-between-two-dates/
 */



/**
 * 64ms  47.92%
 * 39.99MB  75.00%
 */
var daysBetweenDates = function (date1, date2) {

    return (Math.abs(new Date(date1).getTime() - new Date(date2).getTime())) / 1000 / 60 / 60 /24

};