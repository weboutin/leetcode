/**
 * 163. 缺失的区间
 * https://leetcode.cn/problems/missing-ranges/
 */


/**
 * 60ms  46.15%
 * 41.1MB  7.69%
 */
var findMissingRanges = function (nums, lower, upper) {
    let min = nums[0] < lower ? nums[0] : lower
    let max = nums[nums.length - 1] > upper ? nums[nums.length - 1] : upper
    if (upper < nums[0] || lower > nums[nums.length - 1]) {
        return [`${lower}->${upper}`]
    }


    let newRange = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= min && nums[i] <= upper) {
            newRange.push(nums[i])
        }
    }
    if (newRange[0] != min) {
        newRange = [min - 1].concat(newRange)
    }
    if (newRange[newRange.length - 1] != max) {
        newRange.push(max + 1)
    }
    let result = []
    for (let i = 0; i < newRange.length; i++) {
        if (newRange[i] + 1 != newRange[i + 1]) {
            if (i == newRange.length - 1) continue
            if (newRange[i] + 1 == newRange[i + 1] - 1) {
                result.push([newRange[i] + 1])
            } else {
                result.push([newRange[i] + 1, newRange[i + 1] - 1])
            }
        }
    }
    return result.map(item => {
        if (item.length == 1) {
            return `${item[0]}`
        } else {
            return `${item[0]}->${item[1]}`
        }
    })
};



nums = [0, 1, 3, 50, 75], lower = 0, upper = 99
const result = findMissingRanges(nums, lower, upper)

console.log(result)