
/**
 * 2341. 数组能形成多少数对
 * https://leetcode.cn/problems/maximum-number-of-pairs-in-array/
 */




/**
 * 68ms  34.44%
 * 41.4MB  32.22%
 */
var numberOfPairs = function (nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
  }

  // 对数数目
  let matchCount = 0;

  // 剩下的数目
  let leftCount = 0;

  for (let key in map) {

    if (map[key] % 2 == 0) {

      matchCount = matchCount +  map[key] / 2

    } else {
      leftCount++
      matchCount = (map[key] - 1) / 2 + matchCount
    }


  }


  return [matchCount, leftCount]


};


nums = [1, 3, 2, 1, 3, 2, 2]

ans = numberOfPairs(nums)


console.log(ans)