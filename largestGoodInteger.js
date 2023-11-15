/**
 * 2264. 字符串中最大的 3 位相同数字
 * https://leetcode.cn/problems/largest-3-same-digit-number-in-string/
 */



/**
 * 68ms  45.83%
 * 41.70mb  43.75%
 */
var largestGoodInteger = function (num) {

    let maxStr = ""

    for (let i = 0; i < num.length - 2; i++) {

        if (num[i] == num[i + 1] && num[i] == num[i + 2]) {

            const str = `${num[i]}${num[i + 1]}${num[i + 2]}`
            if (Number(str) > Number(maxStr) || maxStr.length == 0) {
                maxStr = str
            }

        }

    }

    return maxStr

};