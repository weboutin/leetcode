/**
 * 1047. 删除字符串中的所有相邻重复项
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 */



/**
 * 84ms  42.15%
 * 50.6MB  46.33%
 */
var removeDuplicates = function (s) {

    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }

    }

    return stack.join('')

};



s = "abbaca"

removeDuplicates(s)