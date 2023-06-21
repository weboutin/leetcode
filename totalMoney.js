/**
 * 1716. 计算力扣银行的钱
 * https://leetcode.cn/problems/calculate-money-in-leetcode-bank/
 */


/**
 * 52ms  98.57%
 * 41.1MB  44.29%
 */
var totalMoney = function (n) {

    let total = 0

    let idx = 1

    if (n > 7) {
        for (let i = 0; i < n - (n % 7); i = i + 7) {
            total += 28 + 7 * (idx - 1)
            idx++
        }
        n = n % 7
    }

    for (let i = 0; i < n; i++) {
        total += idx++
    }

    return total

};



n = 4
// n = 10
n = 20

ans = totalMoney(n)
console.log(ans)