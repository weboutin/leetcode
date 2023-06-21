/**
 * 2293. 极大极小游戏
 * https://leetcode.cn/problems/min-max-game/
 */


/**
 * 64ms  57.78%
 * 41.9MB  44.44%
 */
var minMaxGame = function (nums) {
  if (nums.length == 1) {
    return nums[0]
  }

  let newNums = nums

  while (newNums.length > 1) {
    let tmpNums = []

    let flag = 'min'

    for (let i = 0; i < newNums.length - 1; i = i + 2) {

      if (flag == 'min') {
        item = Math.min(newNums[i], newNums[i + 1])
      } else {
        item = Math.max(newNums[i], newNums[i + 1])
      }

      flag = flag == 'min' ? 'max' : 'min'

      tmpNums.push(item)

    }

    newNums = tmpNums

  }
  

  return newNums[0]

};

let  nums = [1,3,5,2,4,8,2,2]

ans = minMaxGame(nums)
console.log(ans)