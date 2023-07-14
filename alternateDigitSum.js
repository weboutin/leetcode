/**
 * 2544. 交替数字和
 * https://leetcode.cn/problems/alternating-digit-sum/
 */



/**
 * 64ms  50.00%
 * 40.9MB  81.40%
 */
var alternateDigitSum = function (n) {

  let str = n.toString()

  let sum = 0

  for (let i = 0; i < str.length; i++) {

    sum += Number(str[i]) * (i % 2 == 0 ? 1 : -1)

  }

  return sum

};