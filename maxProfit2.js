/**
 * 买卖股票的最佳时机 II
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2zsx1/
 */

/**
 * 64 ms
 * 41.3 MB
 */
var maxProfit = function (prices) {
    let count = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            count += prices[i] - prices[i - 1]
        }
    }
    return count

};


prices = [7, 1, 5, 3, 6, 4]

const result = maxProfit(prices)

console.log(result)