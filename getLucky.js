/**
 * 1945. 字符串转化后的各位数字之和
 * https://leetcode.cn/problems/sum-of-digits-of-string-after-convert/
 */


/**
 * 678ms  55.56%
 * 42.2MB  81.48%
 */
var getLucky = function (s, k) {

    let numStr = ''

    for (let i = 0; i < s.length; i++) {
        numStr += (s[i].charCodeAt() - 96).toString()
    }


    for (let i = 0; i < k; i++) {
        let sum = 0
        for (let j = 0; j < numStr.length; j++) {
            sum += Number(numStr[j])
        }
        numStr = sum.toString()
    }

    return Number(numStr)

};


s = "iiii"
k = 1

ans = getLucky(s, k)
console.log(ans)