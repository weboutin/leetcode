/**
 * 2679. 矩阵中的和
 * https://leetcode.cn/problems/sum-in-a-matrix/
 */



/**
 * 144ms  76.80%
 * 50.6MB  67.20%
 */
var matrixSum = function (nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    nums[i].sort((a, b) => b - a)
  }

  for (let i = 0; i < nums[0].length; i++) {
    let max = Number.MIN_SAFE_INTEGER

    for (let j = 0; j < nums.length; j++) {

      if (nums[j][i] > max) {
        max = nums[j][i]
      }


    }

    sum += max

  }

  return sum

};


nums = [[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]]
nums = [[1]]

ans = matrixSum(nums)
console.log(ans)