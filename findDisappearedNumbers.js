/**
 * 448. 找到所有数组中消失的数字
 * https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/
 */

/**
 * 140ms  37.48%
 * 51.6MB  38.30%
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length

    nums = nums.sort((a, b) => a - b)

    nums.push(n + 1)

    let result = []

    let i = 0

    let idx = 1

    while (i < nums.length) {
        while (nums[i] > idx) {
            result.push(idx)
            idx++
        }
        i++
        if (nums[i] != nums[i - 1]) {
            idx++
        }
    }

    return result
};


nums = [1, 2, 2, 3, 3, 4, 7, 8, 8, 8, 8]
console.log(nums.length)
// nums = [1, 1]

s = findDisappearedNumbers(nums)
console.log(s)