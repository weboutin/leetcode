/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) { return 1 }
    if (n == 2) { return 2 }

    return climbStairs(n - 1) + climbStairs(n - 2)
};


/**
 * 56 ms
 * 40.8 MB
 */
var climbStairs = function (n) {
    let dp = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};


const result = climbStairs(6)
console.log(result)