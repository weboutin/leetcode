/**
 * 2717. 半有序排列
 * https://leetcode.cn/problems/semi-ordered-permutation/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {

    const start = nums.indexOf(1)

    const end = nums.indexOf(nums.length)

    if (start < end) {
        return start + (nums.length - 1 - end)
    } else {
        return start + (nums.length - 1 - end) - (start - end)
    }

};

nums = [2, 4, 1, 3]

nums = [3, 2, 1]

ans = semiOrderedPermutation(nums)
console.log(ans)