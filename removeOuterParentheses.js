/**
 * 1021. 删除最外层的括号
 * https://leetcode.cn/problems/remove-outermost-parentheses/
 */




/**
 * 60ms  91.72%
 * 42.8MB  63.06%
 */
var removeOuterParentheses = function (s) {
  let result = ''
  let stack = []
  let startIdx = 0
  let endIdx = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      if (stack.length == 0) {
        startIdx = i
      }
      stack.push(s[i])
    } else {
      stack.pop()
      if (stack.length == 0) {
        endIdx = i
        result += s.slice(startIdx + 1, endIdx)
      }
    }
  }

  return result
};


s = "(()())(())"

ans = removeOuterParentheses(s)
console.log(ans)

