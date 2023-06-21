/**
 * 2283. 判断一个数的数字计数是否等于数位的值
 * https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/submissions/
 */



/**
 * 52ms  98.14%
 * 41.4MB  39.23%
 */
var digitCount = function (num) {

    let map = {}

    for (let i = 0; i < num.length; i++) {
        if (map[num[i]] == undefined) {
            map[num[i]] = 1
        } else {
            map[num[i]]++
        }
    }

    for (let i = 0; i < num.length; i++) {
        if (map[i] == undefined) {
            map[i] = 0
        }
        if (num[i] != map[i]) {
            return false
        }
    }

    return true
};

num = "1210"

ans = digitCount(num)
console.log(ans)