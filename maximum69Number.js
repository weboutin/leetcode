/**
 * 1323. 6 和 9 组成的最大数字
 * https://leetcode.cn/problems/maximum-69-number/
 */



/**
 * 64ms  45.95%
 * 41MB  74.60%
 */
var maximum69Number = function (num) {
    s = num.toString()


    for (let i = 0; i < s.length; i++) {
        if (s[i] == 6) {
            return num + 3 * Math.pow(10, s.length - i - 1)
        }
    }

    return num
};


num = 9669


ans = maximum69Number(num)
console.log(ans)