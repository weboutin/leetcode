/**
 * 2651. 计算列车到站时间
 * https://leetcode.cn/problems/calculate-delayed-arrival-time/
 */



/**
 * 56ms  91.54%
 * 41.1MB  94.62%
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    let t = arrivalTime + delayedTime
    return t < 24 ? t : t - 24

};