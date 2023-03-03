/**
 * 338. 比特位计数
 * https://leetcode.cn/problems/counting-bits/
 */


/**
 * 88ms  41.24%
 * 47.8MB  58.39%
 */
var countBits = function (n) {
    let result = []
    for (let i = 0; i <= n; i++) {
        result.push(trans(i))
    }
    return result
};


function trans(n) {
    console.log(n)
    let count = 0
    while (n > 0) {
        if (n % 2 == 1) count++
        n = Math.floor(n / 2)
    }
    return count
}


s = countBits(2)
console.log(s)