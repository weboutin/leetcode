/**
 * 1403. 非递增顺序的最小子序列
 * https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order/?envType=list&envId=bxbmnec
 */



/**
 * 65ms  88.46%
 * 43.4MB  50.00%
 */
var minSubsequence = function (nums) {

  const sum = nums.reduce((a, b) => a + b)


  nums.sort((a, b) => b - a)

  let count = 0;

  for (let i = 0; i < nums.length; i++) {

    count += nums[i]
    if (count > sum - count) {
      return nums.slice(0, i + 1)

    }


  }


};

nums = [4, 3, 10, 9, 8]
nums = [4, 4, 7, 6, 7]
nums = [6]

ans = minSubsequence(nums)
console.log(ans)