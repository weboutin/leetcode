/**
 * 561. 数组拆分
 * https://leetcode.cn/problems/array-partition/
 */


/**
 * 112ms  76.86%
 * 46.3MB  48.33%
 */
var arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let sum = 0;
    for (let i = 0; i < nums.length; i = i + 2) {
        sum += nums[i]
    }
    return sum
};


nums = [-470, 66, -4835, -5623]


s = arrayPairSum(nums)
console.log(s)