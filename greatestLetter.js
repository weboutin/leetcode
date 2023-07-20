/**
 * 2309. 兼具大小写的最好英文字母
 * https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case/
 */



/**
 * 76ms  39.58%
 * 43.7MB  39.58%
 */
var greatestLetter = function (s) {

  let goodChar = ''

  for (let i = 0; i < s.length; i++) {
    let lower = s[i].toLowerCase()
    let upper = s[i].toUpperCase()

    if (s.indexOf(lower) > -1 && s.indexOf(upper) > -1 && upper > goodChar) {
      goodChar = upper
    }

  }


  return goodChar
};

s = "AbCdEfGhIjK"

s = "lEeTcOdE"
s = "arRAzFif"

ans = greatestLetter(s)
console.log(ans)