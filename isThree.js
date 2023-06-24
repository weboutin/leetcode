/**
 * 1952. 三除数
 * https://leetcode.cn/problems/three-divisors/?envType=list&envId=bxbmnec
 */


/**
 * 60ms  79.25%
 * 40.8MB  92.45%
 */
var isThree = function (n) {
    let result = null
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            if (result) return false
            result = i
        }
    }
    return result ? true : false
};



ans = isThree(2)
ans = isThree(12)

console.log(ans)