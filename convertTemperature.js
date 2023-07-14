/**
 * 2469. 温度转换
 * https://leetcode.cn/problems/convert-the-temperature/
 */


/**
 * 56ms  85.71%
 * 40.9MB  92.41%
 */
var convertTemperature = function (celsius) {

    return [celsius + 273.15, celsius * 1.80 + 32.00]

};