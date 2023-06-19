/**
 * 1909. 删除一个元素使数组严格递增
 * https://leetcode.cn/problems/remove-one-element-to-make-the-array-strictly-increasing/
 */



/**
 * 60ms  84.85%
 * 41.6MB  46.997%
 */
var canBeIncreasing = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            return checkIsIncreaseList([nums[i]].concat(nums.slice(i + 2))) || checkIsIncreaseList([nums[i - 1]].concat(nums.slice(i + 1)))
        }
    }

    return true

};

function checkIsIncreaseList(nums) {
    console.log(nums)
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            return false
        }
    }
    return true
}

nums = [1, 2, 10, 5, 7]
nums = [2, 3, 1, 2]
nums = [1, 1, 1]
nums = [3, 1, 2]

// nums = [105, 924, 32, 968]

ans = canBeIncreasing(nums)
console.log(ans)