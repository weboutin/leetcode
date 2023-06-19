/**
 * 507. 完美数
 * https://leetcode.cn/problems/perfect-number/?envType=list&envId=bxbmnec
 */


/**
 * 2160ms  25.39%
 * 41.1MB  32.64%
 */
var checkPerfectNumber = function (num) {
    let count = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            count += i
        }
    }

    return count == num

};


num = 28


ans = checkPerfectNumber(num)
console.log(ans)