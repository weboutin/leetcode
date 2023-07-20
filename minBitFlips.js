/**
 * 2220. 转换数字的最少位翻转次数
 * https://leetcode.cn/problems/minimum-bit-flips-to-convert-number/
 */


/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {

  let count = 0;
  let startStr = start.toString(2)
  let goalStr = goal.toString(2)


  const fillLen = Math.abs(startStr.length - goalStr.length)

  // console.log(new Array(fillLen).fill(-1))


  if (startStr.length > goalStr.length) {
    goalStr = new Array(fillLen).fill(9).join('') + goalStr
  } else {
    startStr = new Array(fillLen).fill(9).join('') + startStr
  }

  console.log(startStr)
  console.log(goalStr)

  for (let i = 0; i < startStr.length; i++) {
    if (startStr[i] != goalStr[i]) {
      count++
    }
  }
  return count

};


start = 10, goal = 82

ans = minBitFlips(start, goal)
console.log(ans)


// ans = (7).toString(2)
// console.log(ans)