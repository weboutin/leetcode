/**
 * 1221. 分割平衡字符串
 * https://leetcode.cn/problems/split-a-string-in-balanced-strings/
 */



/**
 * 56ms  86.70%
 * 41.4MB  20.75%
 */
var balancedStringSplit = function (s) {

    let counter = 0;

    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] != stack[stack.length - 1] && stack.length != 0) {
            stack.pop()
        } else {
            stack.push(s[i])
        }

        if (stack.length == 0) {
            counter++
        }
    }


    return counter


};

s = "RLRRLLRLRL"

ans = balancedStringSplit(s)
console.log(ans)