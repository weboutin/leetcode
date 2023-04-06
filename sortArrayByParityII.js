/**
 * 922. 按奇偶排序数组 II
 * https://leetcode.cn/problems/sort-array-by-parity-ii/
 */

/**
 * 76ms  93.77%
 * 48.5MB  9.34%
 */
var sortArrayByParityII = function (nums) {

    const result = []

    let evenIndex = 0
    let oddIndex = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            result[evenIndex] = nums[i]
            evenIndex = evenIndex + 2
        } else {
            result[oddIndex] = nums[i]
            oddIndex = oddIndex + 2
        }


    }

    return result

};

nums = [4, 2, 5, 7]


ans = sortArrayByParityII(nums)


console.log(ans)