/**
 * 买卖股票的最佳时机
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn8fsh/
 */

/**
 * 
 * 72ms 93.64%
 * 50.6 MB 57.65%
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        if (prices[i] - min > result) {
            result = prices[i] - min
        }
    }
    return result
};

/**
 * 92 ms 33.04%
 * 57.7 MB 14.26%
 * bp[i] 表示前i天最大利润 bp的含义
 * bp[i] = max(bp[i-1], price[i] - min) 转移公式
 * 边界 bp[0] = 0
 */
var maxProfit = function (prices) {
    let bp = [0]
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min)
        bp[i] = Math.max(bp[i - 1], prices[i] - min)
    }
    return bp[prices.length - 1]
};

prices = [7, 1, 5, 3, 6, 4]

const result = maxProfit(prices)

console.log(result)