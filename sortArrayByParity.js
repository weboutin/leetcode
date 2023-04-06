/**
 * 905. 按奇偶排序数组
 * https://leetcode.cn/problems/sort-array-by-parity/
 */


/**
 * 76ms  61.30%
 * 43.3MB  68.15%
 */
var sortArrayByParity = function (nums) {

    const even = []
    const odd = []

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 == 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }

    }


    return even.concat(odd)

};