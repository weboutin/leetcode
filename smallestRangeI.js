/**
 * 908. 最小差值 I
 * https://leetcode.cn/problems/smallest-range-i/
 */


/**
 * 68ms  49.47%
 * 42.8MB  85.26%
 */
var smallestRangeI = function (nums, k) {
    let max = nums[0]
    let min = nums[0]

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > max) {
            max = nums[i]
        } else if (nums[i] < min) {
            min = nums[i]
        }
    }

    const result = (max - k) - (min + k)


    return result > 0 ? result : 0

};


nums = [1, 3, 6], k = 3
nums = [0,10], k = 2

ans = smallestRangeI(nums, k)
console.log(ans)