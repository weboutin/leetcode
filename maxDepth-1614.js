/**
 * 1614. 括号的最大嵌套深度
 * https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses/
 */


/**
 * 56ms  86.84%
 * 41.3MB  32.71%
 */
var maxDepth = function (s) {

    let maxD = 0

    let d = 0

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '(') {
            d++
        }

        maxD = Math.max(maxD, d)

        if (s[i] == ')') {
            d--
        }

    }



    return maxD
};