/**
 * 1304. 和为零的 N 个不同整数
 * https://leetcode.cn/problems/find-n-unique-integers-sum-up-to-zero/?envType=list&envId=bxbmnec
 */


/**
 * 56ms  93.33%
 * 41.5MB  43.33%
 */
var sumZero = function (n) {

    let result = [0]

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i)
        result.push(-i)
    }

    if (n % 2 == 0) {
        result.shift()
    }

    return result
};

n = 2

ans = sumZero(n)

console.log(ans)