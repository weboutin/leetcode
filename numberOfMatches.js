/**
 * 1688. 比赛中的配对次数
 * https://leetcode.cn/problems/count-of-matches-in-tournament/
 */



/**
 * 56ms  85.39%
 * 41.2MB  14.61%
 */
var numberOfMatches = function (n) {
    let counter = 0
    while (n != 1) {
        counter += Math.floor(n / 2)
        n = Math.round(n / 2)
    }
    return counter
};

/**
 * 60ms  71.91%
 * 40.8MB  97.75%
 */
var numberOfMatches = function (n) {
    return n - 1
};

n = 14
// n = 7

ans = numberOfMatches(n)
console.log(ans)