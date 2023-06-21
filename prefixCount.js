/**
 * 2185. 统计包含给定前缀的字符串
 * https://leetcode.cn/problems/counting-words-with-a-given-prefix/
 * 
 */



/**
 * 60ms  71.59%
 * 41.5MB  88.64% 
 */
var prefixCount = function (words, pref) {

  let count = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(pref) == 0) {
      count++
    }

  }

  return count
};



//2
words = ["pay", "attention", "practice", "attend"], pref = "at"

ans = prefixCount(words, pref)
console.log(ans)