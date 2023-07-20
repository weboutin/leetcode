/**
 * 1389. 按既定顺序创建目标数组
 * https://leetcode.cn/problems/create-target-array-in-the-given-order/
 */


/**
 * 60ms  71.70%
 * 42.8MB  5.66%
 */
var createTargetArray = function (nums, index) {
  let target = []

  for (let i = 0; i < nums.length; i++) {

    target = target.slice(0, index[i]).concat([nums[i]]).concat(target.slice(index[i], target.length))

  }

  return target

};

nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]
nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0]

ans = createTargetArray(nums, index)
console.log(ans)

