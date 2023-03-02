/**
 * https://leetcode.cn/problems/fibonacci-number/submissions/
 * 56 ms  85.42%
 * 40.8 MB 66.24%
 */
var fib = function (n) {
    let fp = [0, 1]
    for (let i = 2; i <= n; i++) {
        fp[i] = fp[i - 1] + fp[i - 2]
    }
    return fp[n]
};

const result = fib(10)

console.log(result)