/**
 * LCR 179. 查找总价格为目标值的两个商品
 * https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 */

/**
 * 156ms  12.50%
 * 87.47mb  5.04%
 */
var twoSum = function (price, target) {

    let set = new Set(price)

    for (let i = 0; i < price.length; i++) {

        if (set.has(target - price[i])) {
            return [price[i], target - price[i]]

        }

    }

};