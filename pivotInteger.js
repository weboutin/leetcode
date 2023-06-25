/**
 * 2485. 找出中枢整数
 * https://leetcode.cn/problems/find-the-pivot-integer/
 */



/**
 * 64ms  78.95%
 * 41.2MB  21.05%
 */
var pivotInteger = function (n) {

    let x = -1

    let sumX1 = 0
    let sumXN = 0

    for (let i = 1; i <= n; i++) {
        sumX1 += i
        sumXN = (i + n) * (n - i + 1) / 2
        if (sumX1 == sumXN) {
            x = i
        }
    }
    return x

};


n = 8
n = 1
// n = 4
ans = pivotInteger(n)
console.log(ans)

