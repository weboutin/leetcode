/**
 * 2706. 购买两块巧克力
 * https://leetcode.cn/problems/buy-two-chocolates/
 */



/**
 * 84ms  86.16%
 * 44.44MB  62.89%
 */
var buyChoco = function (prices, money) {

    prices.sort((a, b) => a - b)

    if (prices[0] + prices[1] > money) {
        return money
    }

    return money - prices[0] - prices[1]

};