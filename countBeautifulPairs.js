






/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let left = Number(nums[i].toString()[0])
      let right = nums[j] % 10
      if (gcd(left, right) == 1) {
        count++
      }
    }
  }
  return count
};


// 5
nums = [2, 5, 1, 4]
// 2
nums = [11, 21, 12]
// 7
// nums = [31, 25, 72, 79, 74]
// nums = [31, 25, 72, 79, 74]


ans = countBeautifulPairs(nums)
// console.log(ans)

