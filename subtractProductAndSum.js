/**
 * 1281. 整数的各位积和之差
 * https://leetcode.cn/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/
 */


/**
 * 64ms  50.60%
 * 41MB  73.49%
 */
var subtractProductAndSum = function (n) {

    let sub = 1
    let sum = 0

    while (n > 0) {
        let num = n % 10
        sum += num
        sub *= num
        n = Math.floor(n / 10)
    }
    return sub - sum

};

ans = subtractProductAndSum(4421)
console.log(ans)