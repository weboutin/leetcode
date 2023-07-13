/**
 * 1961. 检查字符串是否为数组前缀
 * https://leetcode.cn/problems/check-if-string-is-a-prefix-of-array/?envType=list&envId=bxbmnec
 */


/**
 * 68ms  51.28%
 * 41.3MB  61.54%
 */
var isPrefixString = function (s, words) {

  let tmp = ''

  for (let i = 0; i < words.length; i++) {
    if (tmp.length < s.length) {
      tmp += words[i]
    } else {
      break
    }
  }

  return tmp == s
};


words = ["aa", "aaaa", "banana"], s = 'a'

ans = isPrefixString(s, words)
console.log(ans)