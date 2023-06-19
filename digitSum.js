/**
 * 2243. 计算字符串的数字和
 * https://leetcode.cn/problems/calculate-digit-sum-of-a-string/
 */



/**
 * 64ms  61.33%
 * 41MB  100.00%
 */
var digitSum = function (s, k) {

    while (s.length > k) {

        let newS = ''
        for (let i = 0; i < s.length; i = i + k) {
            let sum = Number(s[i])
            for (let j = i + 1; j < i + k; j++) {
                sum += Number(s[j] || 0)
            }
            newS += sum.toString()
        }
        s = newS;
    }
    return s
};

s = "111", k = 3
s = "11111222223", k = 3
s = "00000000", k = 3

ans = digitSum(s, k)
console.log(ans)