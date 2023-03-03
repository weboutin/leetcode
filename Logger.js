/**
 * 359. 日志速率限制器
 * https://leetcode.cn/problems/logger-rate-limiter/
 */


/**
 * 148ms  11.11%
 * 51.2MB  11.11%
 */
var Logger = function () {
    this.msgMap = new Map()
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {

    if (!this.msgMap.has(message)) {
        this.msgMap.set(message, timestamp + 10)
        return true
    }

    let limiter = this.msgMap.get(message)

    if (timestamp < limiter) {
        return false
    }

    this.msgMap.set(message, timestamp + 10)
    return true
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */