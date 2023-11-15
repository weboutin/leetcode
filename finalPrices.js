/**
 * 1475. 商品折扣后的最终价格
 * https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/
 */

/**
 * 56ms  99.15%
 * 42.28MB  68.64%
 */
var finalPrices = function (prices) {

    const result = []

    for (let i = 0; i < prices.length; i++) {

        result[i] = prices[i]

        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                result[i] = prices[i] - prices[j]
                break
            }

        }

    }

    return result

};


prices = [8, 4, 6, 2, 3]

finalPrices(prices)