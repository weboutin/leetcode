/**
 * 1672. 最富有客户的资产总量
 * https://leetcode.cn/problems/richest-customer-wealth/
 */


/**
 * 56ms  87.99%
 * 40.9MB  97.46%
 */
var maximumWealth = function (accounts) {

    let max = Number.MIN_VALUE

    for (let i = 0; i < accounts.length; i++) {

        let sum = accounts[i].reduce((a, b) => a + b)

        max = Math.max(sum, max)
    }

    return max

};


accounts = [[1, 5], [7, 3], [3, 5]]

ans = maximumWealth(accounts)
console.log(ans)